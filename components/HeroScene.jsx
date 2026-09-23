"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// A quiet, well-lit 3D scene, not a crowded one: real shadows, ACES tone
// mapping, and a soft bloom on the lit windows/lamps/sun do more for how
// this reads than another dozen buildings would. Every mesh that should
// ground itself casts and receives a shadow — that's most of what makes
// low-poly geometry look considered instead of like primitives floating
// in space.
export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let gl;
    try {
      gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    } catch {
      gl = null;
    }
    if (!gl) return undefined; // no WebGL — CSS gradient + copy still work fine

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();

    function skyTexture() {
      const c = document.createElement("canvas");
      c.width = 8;
      c.height = 320;
      const ctx = c.getContext("2d");
      const g = ctx.createLinearGradient(0, 0, 0, 320);
      g.addColorStop(0.0, "#0a0e1f");
      g.addColorStop(0.24, "#151c35");
      g.addColorStop(0.42, "#2a2f52");
      g.addColorStop(0.58, "#4a3f5e");
      g.addColorStop(0.72, "#6b4a5a");
      g.addColorStop(0.85, "#9a5f52");
      g.addColorStop(1.0, "#c98a5f");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 8, 320);
      return new THREE.CanvasTexture(c);
    }
    scene.background = skyTexture();
    // near/far pushed out to match the camera sitting farther back (see
    // tick()) — keeping the same offset from the camera's distance keeps
    // the amount of haze on the buildings the same as before that change.
    scene.fog = new THREE.Fog(0x2a2f52, 78, 185);

    // Vertical FOV — see resize() below for how this is held constant only
    // up to a reference aspect ratio, past which it's the width that gets
    // held constant instead.
    const BASE_FOV = 42;
    const camera = new THREE.PerspectiveCamera(BASE_FOV, 1, 0.1, 320);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    // Capped well under the real device ratio — this scene is fill-rate
    // heavy (shadows + bloom), and a 3x phone panel buys very little
    // visible sharpness here for roughly double the pixels of a 1.5 cap.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.5, 0.82);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // ---------- sky dressing ----------
    function radialTexture(stops, size) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      stops.forEach(([offset, color]) => g.addColorStop(offset, color));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      return new THREE.CanvasTexture(c);
    }

    function starfield() {
      const count = 420;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 150 + Math.random() * 25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.42;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = 22 + r * Math.cos(phi) * 0.72;
        positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 20;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      // WebGL point sprites are flat squares unless given a mask texture —
      // without one, every "star" here rendered as a small white square
      // floating in the sky instead of a soft dot.
      const starTex = radialTexture(
        [
          [0, "rgba(255,255,255,1)"],
          [0.4, "rgba(255,255,255,0.6)"],
          [1, "rgba(255,255,255,0)"],
        ],
        32
      );
      const mat = new THREE.PointsMaterial({
        color: 0xfff3e0,
        size: 0.9,
        sizeAttenuation: true,
        map: starTex,
        alphaTest: 0.05,
        transparent: true,
        opacity: 0.8,
      });
      return new THREE.Points(geo, mat);
    }
    scene.add(starfield());

    const sunTex = radialTexture(
      [
        [0, "rgba(255,224,170,1)"],
        [0.35, "rgba(255,180,110,0.6)"],
        [1, "rgba(255,140,90,0)"],
      ],
      128
    );
    // alphaTest discards the sprite's near-transparent fringe outright —
    // without it, when a building partially occludes this glow, the
    // fringe's faint-but-nonzero alpha (the corners of its square quad,
    // where the radial gradient never quite reaches true zero) survives
    // next to the occluder's hard edge and blooms into a visible bright
    // square hovering beside the building.
    const sunSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: sunTex, transparent: true, depthWrite: false, alphaTest: 0.05 })
    );
    sunSprite.scale.set(36, 36, 1);
    sunSprite.position.set(0, 9, -60);
    scene.add(sunSprite);

    // ---------- lighting ----------
    scene.add(new THREE.AmbientLight(0x8a6a5a, 0.55));
    scene.add(new THREE.HemisphereLight(0x7a5a6a, 0x241d16, 0.5));

    const sun = new THREE.DirectionalLight(0xffcf9e, 2.2);
    sun.position.set(-26, 30, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -55;
    sun.shadow.camera.right = 55;
    sun.shadow.camera.top = 55;
    sun.shadow.camera.bottom = -55;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 100;
    sun.shadow.bias = -0.0015;
    sun.shadow.radius = 3;
    scene.add(sun);

    const rim = new THREE.DirectionalLight(0x9a4040, 0.6);
    rim.position.set(24, 14, -16);
    scene.add(rim);

    // ---------- shared helpers ----------
    function shadowed(mesh) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    // Flat cel/toon shading instead of physically-lit materials: a 4-step
    // gradient map quantizes light into clean bands instead of a harsh
    // per-face PBR falloff, which is what keeps low-segment primitive
    // geometry from reading as "unfinished." Every material in this scene
    // (procedural shapes below, and the real GLTF models loaded above)
    // shares this one gradient map so the whole world reads as one style.
    function toonGradientMap(steps) {
      const c = document.createElement("canvas");
      c.width = steps;
      c.height = 1;
      const ctx = c.getContext("2d");
      for (let i = 0; i < steps; i++) {
        const v = Math.round((i / (steps - 1)) * 255);
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(i, 0, 1, 1);
      }
      const tex = new THREE.CanvasTexture(c);
      tex.minFilter = THREE.NearestFilter;
      tex.magFilter = THREE.NearestFilter;
      tex.generateMipmaps = false;
      return tex;
    }
    const gradientMap = toonGradientMap(4);

    function toon(color, opts) {
      return new THREE.MeshToonMaterial({ color, gradientMap, ...opts });
    }

    // A hard-edge line overlay is the cheapest reliable way to get the
    // crisp "illustrated" silhouette bruno-simon.com-style scenes have —
    // reserved for the landmark forms, not every small detail piece.
    function outline(mesh, color, thresholdAngle) {
      const edges = new THREE.EdgesGeometry(mesh.geometry, thresholdAngle ?? 20);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: color ?? 0x1b1410, transparent: true, opacity: 0.5 }));
      mesh.add(line);
      return mesh;
    }

    // Real GLTF models come in with their own MeshStandardMaterial — swap
    // to toon (keeping their texture map/color) so imported assets match
    // the hand-drawn shapes instead of sitting next to them in a different
    // rendering style.
    function toonifyModel(model) {
      model.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true;
        o.receiveShadow = true;
        try {
          // a mesh can arrive with no material, or a material array
          // (multi-primitive Blender exports) — either would throw on
          // `.color` and silently abort every placement still queued
          // after this one in the same synchronous block, taking whole
          // unrelated buildings down with it.
          const src = Array.isArray(o.material) ? o.material[0] : o.material;
          o.material = new THREE.MeshToonMaterial({
            color: src && src.color ? src.color.clone() : 0xffffff,
            map: (src && src.map) || null,
            gradientMap,
            emissive: src && src.emissive ? src.emissive.clone() : 0x000000,
            emissiveIntensity: (src && src.emissiveIntensity) ?? 1,
            transparent: !!(src && src.transparent),
            opacity: (src && src.opacity) ?? 1,
            alphaTest: (src && src.alphaTest) ?? 0,
            // some sources (e.g. procedurally generated geometry with no
            // NORMAL attribute of its own) have unverified/inconsistent
            // triangle winding — computeVertexNormals() then produces
            // normals that face inward as easily as outward, and under
            // toon shading that renders the whole mesh pure black
            // (invisible against a dark background) from the "wrong"
            // side. DoubleSide costs a little GPU time but makes every
            // model immune to that regardless of its winding order.
            side: THREE.DoubleSide,
          });
        } catch {
          // leave the mesh's original material rather than let one bad
          // mesh take down every other model queued in this batch
        }
      });
      return model;
    }

    // Collapses a model with many separate mesh nodes sharing a handful
    // of materials down to one mesh per material. Some exported assets
    // arrive as hundreds of individual meshes (e.g. one per seat row)
    // with no NORMAL attribute of their own — every one of those is a
    // full extra draw call *and* shadow-map draw call every frame, and at
    // a few hundred it's enough to stall the GPU and take the whole
    // canvas down (not a catchable JS error — the render loop just never
    // recovers). Merging by material turns hundreds of draw calls into a
    // handful, and normals get computed once on the merged result instead
    // of not at all.
    // excludeNames: substrings (case-insensitive) — a mesh whose node name
    // contains any of them is skipped entirely. Several of these
    // ChatGPT-generated assets bundle a whole diorama (ground plane, a
    // copy of our own maroon road, a backdrop) around the actual
    // building/tree that was asked for; this drops that bundled scenery
    // so only the real object gets merged in.
    function mergeModelByMaterial(model, excludeNames) {
      model.updateMatrixWorld(true);
      const groups = new Map();
      model.traverse((o) => {
        if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
        if (excludeNames && excludeNames.some((s) => o.name.toLowerCase().includes(s))) return;
        const src = Array.isArray(o.material) ? o.material[0] : o.material;
        if (!src) return;
        const key = src.uuid;
        if (!groups.has(key)) groups.set(key, { material: src, geometries: [] });
        const geo = o.geometry.clone();
        geo.applyMatrix4(o.matrixWorld);
        // keep only position — these source meshes have no normal/uv of
        // their own, and mixing attribute sets would break the merge
        for (const name of Object.keys(geo.attributes)) {
          if (name !== "position") geo.deleteAttribute(name);
        }
        groups.get(key).geometries.push(geo);
      });
      const result = new THREE.Group();
      for (const { material, geometries } of groups.values()) {
        const merged = mergeGeometries(geometries, false);
        merged.computeVertexNormals();
        result.add(new THREE.Mesh(merged, material));
      }
      return result;
    }

    // A different export technique than every other asset here: no
    // materials at all — each mesh instead bakes its color per-vertex
    // (a glTF COLOR_0 attribute). mergeModelByMaterial keys groups by
    // material identity and drops every attribute but position, which
    // would either merge everything into one undifferentiated blob or
    // throw the baked coloring away entirely. This keeps the color
    // attribute through the merge and drives a single vertexColors
    // material from it, so the model's real per-part color (windows vs.
    // stone vs. crown vs. spire) survives intact.
    function mergeModelPreservingVertexColors(model, excludeNames) {
      model.updateMatrixWorld(true);
      const geometries = [];
      model.traverse((o) => {
        if (!o.isMesh || !o.geometry || !o.geometry.attributes.position) return;
        if (excludeNames && excludeNames.some((s) => o.name.toLowerCase().includes(s))) return;
        if (!o.geometry.attributes.color) return;
        const geo = o.geometry.clone();
        geo.applyMatrix4(o.matrixWorld);
        for (const name of Object.keys(geo.attributes)) {
          if (name !== "position" && name !== "color") geo.deleteAttribute(name);
        }
        geometries.push(geo);
      });
      const merged = mergeGeometries(geometries, false);
      merged.computeVertexNormals();
      const material = new THREE.MeshToonMaterial({
        vertexColors: true,
        color: 0xffffff,
        gradientMap,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      const result = new THREE.Group();
      result.add(mesh);
      return result;
    }

    // ---------- NYC: real modeled buildings (Kenney City Kit — Commercial,
    // CC0), not code-drawn boxes. Each is loaded once and cloned per
    // placement; fitHeight rescales/repositions every clone uniformly so
    // models of unknown native scale all sit correctly on the ground.
    const nyc = new THREE.Group();
    scene.add(nyc);

    function fitHeight(object, targetHeight) {
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      box.getSize(size);
      const scale = targetHeight / (size.y || 1);
      object.scale.setScalar(scale);
      const box2 = new THREE.Box3().setFromObject(object);
      object.position.y -= box2.min.y;
      return object;
    }

    function loadModel(url) {
      return new Promise((resolve, reject) => {
        gltfLoader.load(url, (gltf) => resolve(gltf.scene), undefined, reject);
      });
    }

    const gltfLoader = new GLTFLoader();
    let cancelled = false;

    // The NYC bull and bear (built synchronously below, no model to load)
    // walk with a simple procedural leg-swing instead of a mixer/clip.
    const critterStates = [];
    const ROAD_MIN_Z = -42;
    const ROAD_MAX_Z = 42;

    (async () => {
      let models;
      try {
        models = await Promise.all(
          [
            "tree_oak",
            "tree_detailed",
          ]
            .map((name) => `/models/${name}.glb`)
            .concat([
              "/models/road/road-straight.glb",
              "/models/empire-state.glb",
              "/models/kyle-field-chatgpt.glb",
              "/models/academic-building-chatgpt.glb",
              "/models/empire-state-chatgpt.glb",
              "/models/one-world-trade-center-chatgpt.glb",
              "/models/albritton-bell-tower.glb",
              "/models/chrysler-building-v2.glb",
              "/models/aggieland-water-tower.glb",
              "/models/flatiron-building.glb",
              "/models/woolworth-building-v2.glb",
              "/models/century-tree.glb",
              "/models/jpmorgan-270-park.glb",
              "/models/wehner-building.glb",
              "/models/brooklyn-bridge.glb",
              "/models/40-wall-street.glb",
              "/models/guggenheim-museum.glb",
              "/models/vessel.glb",
            ])
            // load errors are tagged with their URL before rejecting — a
            // silent Promise.all rejection here used to take down every
            // landmark in the batch with no way to tell which file caused it
            .map((url) =>
              loadModel(url).catch((e) => {
                console.error(`landmark model failed to load: ${url}`, e);
                throw e;
              })
            )
        );
      } catch {
        return; // one bad model — scene falls back to procedural-only
      }
      if (cancelled) return;

      const [
        treeOak,
        treeDetailed,
        roadTile,
        esbModel,
        kyleFieldModel,
        academicModel,
        esbChatgptModel,
        owtcModel,
        bellTowerModel,
        chryslerModel,
        waterTowerModel,
        flatironModel,
        woolworthModel,
        centuryTreeModel,
        jpmorganModel,
        wehnerModel,
        brooklynBridgeModel,
        wallStreet40Model,
        guggenheimModel,
        vesselModel,
      ] = models;

      // Empire State Building — modeled in Blender (bevel/array/boolean
      // modifiers, not stacked Three.js primitives), colored from the
      // exact palette sampled out of Kenney's own colormap.png so it sits
      // in the same visual world as the real Kenney buildings around it.
      // Isolated in its own try/catch: one landmark's oddities shouldn't
      // be able to take down every other model queued in this batch.
      try {
        void esbModel; // our own build, kept loaded but swapped out below for comparison
        // "background_*" and "city_*" are plain, unnamed filler towers this
        // source file bundles around the real tower — generic boxes with no
        // resemblance to any actual building, not landmarks in their own
        // right, so they're dropped the same way Chrysler's "NYC companion"
        // meshes are.
        const esbMerged = mergeModelByMaterial(esbChatgptModel.clone(true), ["ground", "road", "background", "city"]);
        const esb = toonifyModel(esbMerged);
        esb.rotation.x = -Math.PI / 2; // same source-file up-axis quirk as Kyle Field/Academic Building
        fitHeight(esb, 42);
        // Background tier, behind OWTC (z=-18). x=-14 keeps it on-screen
        // (measured against the real canvas width, not an artificially
        // widened test viewport) and still clear of the bridge/the
        // critters' walking lane. Depth pushed to z=-68, the deepest of
        // the four background buildings — its own footprint overlaps
        // both JPMorgan's and 40 Wall St's in x (ESB's box is unusually
        // wide), so it needs real z-separation from both, not just a
        // token amount, to make the group read as staggered rather than
        // one flat back wall.
        esb.position.x = -14;
        esb.position.z = -68;
        nyc.add(esb);
      } catch (e) {
        console.error("ESB failed to place — rest of the scene still loads", e);
      }

      // One World Trade Center — new NYC landmark, same ChatGPT pipeline
      // and same two fixes as everything else from it.
      try {
        // "Bldg_*"/"BldgCap_*" are plain filler towers this source file
        // bundles around the real tower (same idea as Chrysler's "NYC
        // companion" meshes and ESB's "background_*"/"city_*" ones) — dropped
        // so only the real One World Trade Center tower renders. The file
        // also bundles its own 9/11 Memorial plaza dressing (a reflecting
        // pool, a lamp post + glow sprite, a plaza plinth, planted trees) —
        // authored at plaza scale right at the tower's base, so once
        // fitHeight rescales the whole group to the tower's height those
        // small props blow up disproportionately and read as flat squares
        // hovering in the air. Dropped for the same reason as the filler
        // towers: they're not the landmark itself.
        const owtcMerged = mergeModelByMaterial(owtcModel.clone(true), [
          "ground",
          "road",
          "bldg",
          "lamp",
          "pool",
          "plaza",
          "tree_",
        ]);
        const owtc = toonifyModel(owtcMerged);
        owtc.rotation.x = -Math.PI / 2;
        fitHeight(owtc, 46); // real 1WTC is taller than the Empire State Building
        // This asset's actual footprint (measured after merge/fit) is far
        // wider than its real-world proportions — roughly 40 units across
        // for a 46-unit-tall tower. Placed as the deep-background anchor:
        // it's both the tallest thing in the scene and the farthest from
        // camera, so fog naturally softens it into the skyline instead of
        // looming over everything closer up — real depth logic instead of
        // "biggest thing closest to the lens."
        owtc.position.x = -38;
        owtc.position.z = -18;
        nyc.add(owtc);
      } catch (e) {
        console.error("One World Trade Center failed to place — rest of the scene still loads", e);
      }

      // Chrysler Building — this source file bundles five extra "NYC
      // companion" buildings, a ground/road plane, and a small starfield
      // around the real one; excluded below so only the actual tower
      // (with its eagle gargoyles, sunburst crown, and spire) makes it
      // in. Unlike every other asset here, this one has no materials at
      // all — its color is baked per-vertex — so it goes through
      // mergeModelPreservingVertexColors instead of the usual
      // mergeModelByMaterial + toonifyModel pipeline, keeping its real
      // per-part coloring (windows vs. stone vs. crown vs. spire) intact
      // instead of collapsing to one flat tint.
      try {
        const chryslerMerged = mergeModelPreservingVertexColors(chryslerModel.clone(true), [
          "ground",
          "road",
          "centerline",
          "companion",
          "sun disc",
          "star",
        ]);
        const chrysler = chryslerMerged;
        chrysler.rotation.x = -Math.PI / 2;
        fitHeight(chrysler, 38); // shorter than ESB/OWTC, matching its real relative height
        // Pulled much deeper this time — past the bridge/40 Wall
        // St/Guggenheim tier entirely and into OWTC's own depth band.
        // Stays collision-free there only because OWTC's footprint,
        // wide as it is, still doesn't reach as far right as x=-14 (its
        // own right edge is x=-18.3) — depth alone doesn't clear it,
        // this x lane does. Also clear of ESB's much wider footprint
        // one tier further back, and of the critters' patrol lane
        // (z between -42 and 0, near x=0).
        chrysler.position.x = -14;
        chrysler.position.z = -25;
        nyc.add(chrysler);
      } catch (e) {
        console.error("Chrysler Building failed to place — rest of the scene still loads", e);
      }

      // Woolworth Building — real 1913 Gothic-revival "Cathedral of
      // Commerce." Replaced with a cleaner "hero final" export: real
      // materials (stone/terracotta/copper/gold/glass), pre-merged to one
      // mesh per material already, so it needs neither the vertex-color
      // pipeline nor the two hand-authored gap-filler boxes the previous
      // export required. x=-46 clears every neighbor regardless of
      // depth (its x-range doesn't overlap ESB, JPMorgan, or 40 Wall
      // St's), so its z is free to pick purely for the staggered look —
      // z=-60 sits it between the other three rather than flush with
      // any of them.
      try {
        const woolworthMerged = mergeModelByMaterial(woolworthModel.clone(true));
        const woolworth = toonifyModel(woolworthMerged);
        woolworth.rotation.x = -Math.PI / 2;
        fitHeight(woolworth, 40); // real Woolworth is shorter than OWTC/ESB
        woolworth.position.x = -46;
        woolworth.position.z = -60;
        nyc.add(woolworth);
      } catch (e) {
        console.error("Woolworth Building failed to place — rest of the scene still loads", e);
      }

      // Flatiron Building — real footprint is famously a thin wedge, but
      // this source file bundles four full background skyscrapers (each
      // with its own roof/window/trim set) plus a ground plane, road,
      // sidewalks, benches, street trees, and sky dressing (stars/sun) all
      // sampled around the actual triangular tower — every one of those
      // excluded below so only the Flatiron itself (body, cornices,
      // pilasters, prow windows, rooftop water tank) survives the merge.
      try {
        const flatironMerged = mergeModelByMaterial(flatironModel.clone(true), [
          "city_",
          "band_",
          "-24_16",
          "-25_33",
          "23_35",
          "25_18",
          "ground",
          "road",
          "sidewalk",
          "star",
          "sun_disc",
          "dusk_sky",
          "trunk",
          "bench",
          "camera_",
        ]);
        const flatiron = toonifyModel(flatironMerged);
        flatiron.rotation.x = -Math.PI / 2;
        // Real Flatiron is much shorter than the others (22 stories) — its
        // fame is the wedge silhouette, not height, so foreground works in
        // its favor: kept modest in scale.
        fitHeight(flatiron, 12);
        // Pulled back to Guggenheim's general depth, interleaved with it
        // and the Vessel rather than flush with either: its x-range
        // overlaps the Vessel's by several units, so it needs real
        // z-separation from it specifically. Both boxes are asymmetric
        // (Flatiron's own footprint extends 9.1 back from its center vs
        // only 3.7 forward — not the symmetric half-depth a quick
        // average suggests, which is exactly what undershot this by 1.6
        // units on the first pass) — z=28 clears the Vessel's front
        // edge with real margin, confirmed against the actual rendered
        // bounding boxes, not estimated ones. Its x-range only just
        // clears Guggenheim's (under 2 units), so no z constraint from
        // that one, but z=28 keeps daylight there too.
        flatiron.position.x = -33;
        flatiron.position.z = 28;
        nyc.add(flatiron);
      } catch (e) {
        console.error("Flatiron Building failed to place — rest of the scene still loads", e);
      }

      // JPMorgan Chase HQ (270 Park Avenue) — a real, current NYC
      // supertall with a distinctive diagrid/megastructure silhouette
      // (fan columns, diagonal braces), not a generic glass box. File is
      // building-only aside from a "Transparent exchange base" display
      // plinth added for this render.
      try {
        const jpmorganMerged = mergeModelByMaterial(jpmorganModel.clone(true), [
          "transparent exchange base",
        ]);
        const jpmorgan = toonifyModel(jpmorganMerged);
        jpmorgan.rotation.x = -Math.PI / 2;
        fitHeight(jpmorgan, 44); // one of the tallest real towers here — background-tier company for OWTC
        // x=-34's own range overlaps ESB's wide footprint in x, so it
        // needs real z-separation from ESB (now at z=-68) — z=-50 puts
        // it at the shallow end of the group, 18 units clear.
        jpmorgan.position.x = -34;
        jpmorgan.position.z = -50;
        nyc.add(jpmorgan);
      } catch (e) {
        console.error("JPMorgan 270 Park failed to place — rest of the scene still loads", e);
      }

      // 40 Wall Street (the Trump Building) — real 1930 Art Deco landmark,
      // briefly the world's tallest building that same year; its stepped
      // pyramidal roof and cathedral-lantern spire are the recognizable
      // silhouette. Clean building-only asset (real materials, no bundled
      // scenery), so it needs no exclude list. x=-20's own range also
      // overlaps ESB's wide footprint (ESB's box alone spans nearly the
      // whole center of this depth tier), so it needs z-separation from
      // ESB (z=-68) too — z=-52 puts it 16 units clear, at a different
      // depth than JPMorgan and Woolworth so the four read as staggered
      // rather than lined up on one flat back wall.
      try {
        const wallStreet40Merged = mergeModelByMaterial(wallStreet40Model.clone(true));
        const wallStreet40 = toonifyModel(wallStreet40Merged);
        wallStreet40.rotation.x = -Math.PI / 2;
        fitHeight(wallStreet40, 36); // shorter than Chrysler/Woolworth, matching its real relative height
        wallStreet40.position.x = -20;
        wallStreet40.position.z = -52;
        nyc.add(wallStreet40);
      } catch (e) {
        console.error("40 Wall Street failed to place — rest of the scene still loads", e);
      }

      // Guggenheim Museum — Frank Lloyd Wright's spiral rotunda. Real,
      // low, wide building-only asset (no bundled scenery) — a deliberate
      // contrast against the skyscrapers around it, the same role
      // Flatiron plays with its own short, distinctive silhouette. Kept
      // modest in scale to match its real (much shorter) height, tucked
      // into its own lane clear of every other footprint (measured via
      // each landmark's actual rendered bounding box — z=6 originally
      // overlapped OWTC's own oversized footprint by a few units; z=12
      // clears it).
      // "annex" (the real 1992 Gwathmey Siegel annex tower and its
      // window-slit recesses, "annex front wall"/"annex slit 1-1"
      // through "8-3"/"annex top cap"/"annex tower") is a real part of
      // the building but renders as thin, flat, unlit dark slabs and a
      // grid of small dark rectangles under this toon-shading pipeline —
      // the exact "floating squares" reported earlier, just from a
      // different model this time. Excluded so only the rotunda (the
      // recognizable part) renders.
      try {
        const guggenheimMerged = mergeModelByMaterial(guggenheimModel.clone(true), ["annex"]);
        const guggenheim = toonifyModel(guggenheimMerged);
        guggenheim.rotation.x = -Math.PI / 2;
        fitHeight(guggenheim, 10);
        guggenheim.position.x = -46;
        guggenheim.position.z = 12;
        nyc.add(guggenheim);
      } catch (e) {
        console.error("Guggenheim Museum failed to place — rest of the scene still loads", e);
      }

      // The Vessel — real Hudson Yards landmark (2019), the honeycomb
      // spiral staircase structure. Clean building-only asset (real
      // copper/glass/stone materials, no bundled scenery — the "plinth"
      // parts are its own real stone base, not display props). Pulled
      // back to Guggenheim's depth band too, interleaved with it and
      // Flatiron. z=10, not shallower: the Vessel's own x-range sits
      // entirely inside OWTC's (unlike Flatiron/Guggenheim, which only
      // brush its edge), so it needs real z-clearance from OWTC's own
      // z-range (max z=2.6) on top of the Flatiron separation.
      try {
        const vesselMerged = mergeModelByMaterial(vesselModel.clone(true));
        const vessel = toonifyModel(vesselMerged);
        vessel.rotation.x = -Math.PI / 2;
        fitHeight(vessel, 14); // shorter than the skyscrapers, taller than Guggenheim/Flatiron
        vessel.position.x = -24;
        vessel.position.z = 10;
        nyc.add(vessel);
      } catch (e) {
        console.error("The Vessel failed to place — rest of the scene still loads", e);
      }

      // ---------- Campus layout ----------
      // Same depth-hierarchy logic as the NYC side, not just "nothing
      // touches": rank landmarks by real-world weight and give each one
      // the depth that role deserves, instead of clustering everything
      // at one z and nudging things apart reactively.
      //   Kyle Field    — background anchor. It's both the most massive
      //                   real landmark here (a 100,000-seat stadium) and
      //                   the model with the most exaggerated footprint,
      //                   so — exactly like One World Trade Center on the
      //                   NYC side — distance and fog do the work of
      //                   making it read as a grand, hazy presence instead
      //                   of an oversized shape looming up close.
      //   Academic Bldg — midground. The classic, most-photographed
      //                   building on campus; parallel to the Empire
      //                   State Building's role as the recognizable
      //                   "classic" anchor at a comfortable middle depth.
      //   Bell Tower / Water Tower — secondary supporting landmarks, both
      //                   placed behind the Academic Building (deeper z)
      //                   rather than beside it.
      //   Century Tree  — also placed behind the Academic Building,
      //                   matching its real TAMU geography, at its own
      //                   depth so it doesn't collide with the Water
      //                   Tower back there.
      //   Wehner        — deepest background element on this side, behind
      //                   Kyle Field and the Water Tower (a fitting real
      //                   building to include — home of Mays Business
      //                   School — even at the back of the composition).
      // Nothing here comes within 5 units of x=0 — that keeps every
      // building off the road itself and clear of the bull/bear critters'
      // fixed walking lanes (x≈±2.5, z from -42 to 0). Every placement
      // below was verified non-overlapping by measuring actual rendered
      // bounding boxes, not by eyeballing it.

      // Albritton Bell Tower — replaces the earlier procedural
      // cylinders-and-cones approximation with a real modeled tower
      // (clock faces, brick banding, corner piers). Same pipeline: merge
      // its many small parts down to one draw call per material, strip
      // its bundled plaza/walkway/drive, fix the source file's up axis.
      try {
        const bellMerged = mergeModelByMaterial(bellTowerModel.clone(true), [
          "ground",
          "drive",
          "plaza",
          "pad",
          "walk_",
          "bg_",
          "campus_bg",
          "canopy_",
          "sky_",
          "sun_disc",
          "trunk_",
        ]);
        const bellTower = toonifyModel(bellMerged);
        bellTower.rotation.x = -Math.PI / 2;
        fitHeight(bellTower, 21); // matches the old procedural tower's total height
        bellTower.position.x = 44; // secondary accent, its own lane between Kyle Field (background) and the front group
        bellTower.position.z = -10;
        campus.add(bellTower);
      } catch (e) {
        console.error("Albritton Bell Tower failed to place — rest of the scene still loads", e);
      }

      // Aggieland Water Tower — a real, specific TAMU landmark, not a
      // generic tank. The source file bundles a whole separate campus
      // building, its own ground/road plane, an oak tree, and two full
      // lettered "WELCOME TO AGGIELAND" sign sets around the tower
      // itself; all excluded below so only the tower (shaft, tank, skirt
      // collar, roof, base plinth) loads. "building_roof" is that bundled
      // building's roof specifically — its walls (campus_building) were
      // already excluded, but the roof wasn't, so it rendered as a
      // separate white shape with nothing under it.
      try {
        const towerMerged = mergeModelByMaterial(waterTowerModel.clone(true), [
          "campus_building",
          "campus_ground",
          "building_roof",
          "maroon_road",
          "road_center",
          "oak_",
          "text_",
          "aggie_face_",
          "aggie_outline_",
          "dusk_sun",
        ]);
        const waterTower = toonifyModel(towerMerged);
        // The tower's own main parts (shaft, tank, skirt collar, roof
        // vent/beacon, base plinth) have no material at all in this file
        // — toonifyModel's fallback colors them flat white, which under
        // toon shading's hard light/dark bands reads as disconnected
        // white patches rather than a shaded cylindrical tank. A warm
        // cream tone (matching the tower's own "aggie_outline" lettering
        // color) instead of stark white.
        waterTower.traverse((o) => {
          if (!o.isMesh || !o.material || o.material.map) return;
          const c = o.material.color;
          if (c && c.r > 0.97 && c.g > 0.97 && c.b > 0.97) {
            o.material.color.set(0xede6d6);
          }
        });
        waterTower.rotation.x = -Math.PI / 2;
        // Sized down from 16 — its wide-legged support structure gives it
        // a footprint bigger than its slender silhouette suggests, and at
        // 16 units tall it doesn't fit in the gap between the Academic
        // Building (x<=30.7) and the Bell Tower (x>=41.7) without
        // overlapping one of them. Shrunk so it tucks into that gap and
        // reads as genuinely next to the Bell Tower.
        fitHeight(waterTower, 9);
        waterTower.position.x = 34;
        waterTower.position.z = -2;
        campus.add(waterTower);
      } catch (e) {
        console.error("Aggieland Water Tower failed to place — rest of the scene still loads", e);
      }

      // Kyle Field — also modeled in Blender: a real spun terraced bowl
      // (not a lathe placeholder), corner towers with a boolean-cut
      // archway, cream shell, oval footprint. Same isolation as above.
      try {
        const kfMerged = mergeModelByMaterial(kyleFieldModel.clone(true));
        const kyleField = toonifyModel(kfMerged);
        // this asset's own vertex data doesn't align with glTF's Y-up
        // convention (its true "up" axis is what the file calls Z) — a
        // real authoring quirk in the source file, not a loader bug —
        // so it arrives lying on its side until corrected here.
        kyleField.rotation.x = -Math.PI / 2;
        fitHeight(kyleField, 10);
        // Background anchor — see the layout note above: this is both the
        // single largest real landmark on campus and the model with the
        // most exaggerated footprint, so it gets the same treatment OWTC
        // gets on the NYC side (pushed back, let fog and distance carry
        // its bulk instead of crowding the camera with it).
        kyleField.position.x = 40;
        kyleField.position.z = -32;
        campus.add(kyleField);
      } catch (e) {
        console.error("Kyle Field failed to place — rest of the scene still loads", e);
      }

      // Academic Building — same ChatGPT-generated pipeline as Kyle
      // Field, same two fixes: merge its many small meshes down to one
      // per material (avoids the draw-call overload that crashed the
      // whole scene last time), and correct the same "true up axis is Z,
      // not the declared Y" quirk in the source file.
      try {
        const acadMerged = mergeModelByMaterial(academicModel.clone(true));
        const academic = toonifyModel(acadMerged);
        academic.rotation.x = -Math.PI / 2;
        fitHeight(academic, 10);
        // Midground — the classic, most-photographed building on campus,
        // parallel to the Empire State Building's role on the NYC side.
        // x=18, not 8 — at 8 this building's own footprint dipped to
        // x=-4.7 (measured), nearly touching the road and sitting
        // squarely in the bear critter's fixed walking lane. Every
        // campus building here keeps its leading edge at least 5 units
        // clear of x=0 for exactly that reason.
        academic.position.x = 18;
        academic.position.z = -5;
        campus.add(academic);
      } catch (e) {
        console.error("Academic Building failed to place — rest of the scene still loads", e);
      }

      // Century Tree — placed behind the Academic Building (real TAMU
      // geography: the tree sits just north of the Academic Building).
      // Shifted left so its canopy reaches a little past x=0 — the one
      // deliberate exception to the "5 units clear of the road" rule
      // every other campus building follows, since a tree overhanging
      // the road is the point here, not a mistake. Its trunk/anchor
      // stays well on the college-station side. No name-based bundled
      // scenery to exclude here (single-tree asset), so it's merged
      // as-is.
      try {
        const treeMerged = mergeModelByMaterial(centuryTreeModel.clone(true));
        const centuryTree = toonifyModel(treeMerged);
        centuryTree.rotation.x = -Math.PI / 2;
        fitHeight(centuryTree, 13);
        centuryTree.position.x = 6;
        centuryTree.position.z = -24;
        campus.add(centuryTree);
      } catch (e) {
        console.error("Century Tree failed to place — rest of the scene still loads", e);
      }

      // Wehner Building (Mays Business School) — pushed to the deepest
      // point on the campus side, behind Kyle Field and the Water Tower.
      // Clean building-only asset, no bundled ground/road/scenery to
      // exclude.
      try {
        const wehnerMerged = mergeModelByMaterial(wehnerModel.clone(true));
        const wehner = toonifyModel(wehnerMerged);
        wehner.rotation.x = -Math.PI / 2;
        fitHeight(wehner, 11);
        wehner.position.x = 20;
        wehner.position.z = -62;
        campus.add(wehner);
      } catch (e) {
        console.error("Wehner Building failed to place — rest of the scene still loads", e);
      }

      // Brooklyn Bridge — replaces the old procedural placeholder bridge
      // (boxes + cylinders) in the same spot on the NYC side. Real
      // materials with baked colors (no vertex-color trick needed here).
      // Authored with X = span length, Y = deck width, Z = height (0 at
      // the footings, 36.7 at the tower caps) — building that mapping
      // (span->Z, width->X, height->Y, height direction preserved) as an
      // explicit basis-remap matrix instead of composing Euler rotations
      // by hand, since a hand-derived pair of Euler rotations landed the
      // bridge upside down here (footings at the top, tower caps at the
      // ground) without changing its bounding box, which stays the same
      // under a height-axis flip and so can't catch this by itself.
      try {
        const bridgeMerged = mergeModelByMaterial(brooklynBridgeModel.clone(true));
        const bridge = toonifyModel(bridgeMerged);
        const axisRemap = new THREE.Matrix4().set(
          0, 1, 0, 0,
          0, 0, 1, 0,
          1, 0, 0, 0,
          0, 0, 0, 1
        );
        bridge.quaternion.setFromRotationMatrix(axisRemap);
        fitHeight(bridge, 12); // towers roughly Flatiron-scale, per real relative heights
        bridge.position.x = -6;
        bridge.position.z = 0;
        nyc.add(bridge);
      } catch (e) {
        console.error("Brooklyn Bridge failed to place — rest of the scene still loads", e);
      }

      // The Kenney filler skyscrapers that used to sit here were dropped:
      // ESB and OWTC's real (measured) footprints are wide enough that
      // every one of these six smaller buildings fell inside one or both
      // of them. Per the "when two buildings collide, keep the
      // ChatGPT-built one" rule, the smaller Kenney fillers lost.

      [treeOak, treeDetailed].forEach((source, i) => {
        const model = toonifyModel(source.clone(true));
        // tree_detailed's root node uses an authored pure-white
        // "_defaultMat" for a small part of the mesh — recolor to bark
        // brown rather than leave a stray white patch on the trunk.
        model.traverse((o) => {
          if (!o.isMesh || !o.material || o.material.map) return;
          const c = o.material.color;
          if (c && c.r > 0.97 && c.g > 0.97 && c.b > 0.97) {
            o.material.color.set(0xe28357);
          }
        });
        fitHeight(model, 4.4);
        // tucked beside the Academic Building, clear of the Century
        // Tree's much larger canopy and Kyle Field's background footprint
        model.position.set(33 + i * 5, 0, -8);
        campus.add(model);
      });

      // Real modeled road tile (built in Blender — maroon pavement, cream
      // curbs, cream dashed centerline as actual beveled geometry, not a
      // texture) instead of a flat plane. toonifyModel preserves each
      // part's own baked color rather than forcing everything to one tint.
      toonifyModel(roadTile);
      // The dash-mark cubes in the source file sit a hair above the
      // pavement's own top surface (their own authored offset, not
      // something we introduced) — under a low, raking sun angle each one
      // casts a small detached shadow just past its edge, which at a
      // glance reads as a little square floating over the road. Dropping
      // them flush with the pavement and skipping their shadow entirely
      // fixes both: the marking still shows (it keeps its own cream
      // material), it just doesn't cast one.
      roadTile.traverse((o) => {
        if (o.isMesh && (o.name === "Cube.003" || o.name === "Cube.004")) {
          o.position.y = 0.02;
          o.castShadow = false;
        }
      });
      const roadBox = new THREE.Box3().setFromObject(roadTile);
      const roadSize = new THREE.Vector3();
      roadBox.getSize(roadSize);
      const tileLen = roadSize.z || 1;
      const roadScale = 5 / (roadSize.x || 1);
      for (let z = -45 + (tileLen * roadScale) / 2; z < 45; z += tileLen * roadScale) {
        const tile = roadTile.clone(true);
        tile.scale.setScalar(roadScale);
        tile.position.set(0, 0, z);
        scene.add(tile);
      }
    })();

    const bronze = toon(0x2c2420);
    const bullBody = shadowed(new THREE.Mesh(new THREE.SphereGeometry(1.15, 8, 7), bronze));
    bullBody.scale.set(1.5, 1.0, 0.95);
    bullBody.position.set(-11, 1.05, -19);
    nyc.add(bullBody);
    const bullHead = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.0, 7), bronze));
    bullHead.position.set(-12.5, 1.3, -19);
    bullHead.rotation.z = Math.PI / 2 + 0.3;
    nyc.add(bullHead);
    [
      [-13.0, 1.9, -19.35],
      [-13.0, 1.9, -18.65],
    ].forEach(([x, y, z]) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.6, 5), bronze);
      horn.position.set(x, y, z);
      horn.rotation.z = 0.9;
      nyc.add(horn);
    });
    [
      [-10.2, 0.35, -19.5],
      [-10.2, 0.35, -18.5],
      [-11.7, 0.35, -19.5],
      [-11.7, 0.35, -18.5],
    ].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.7, 5), bronze);
      leg.position.set(x, y, z);
      nyc.add(leg);
    });

    // A living bull and bear pacing the NYC sidewalk — Wall Street's own
    // bull-market/bear-market shorthand, in place of suited pedestrians.
    // Built from the same primitive vocabulary as the static bronze bull
    // above (spheres/cones/cylinders under toon shading), just colored
    // like an animal instead of patina bronze, and animated with a
    // procedural diagonal leg-swing since there's no rig to play a clip
    // on. Body built facing +Z so it lines up with the walkers' direction
    // of travel (they move along position.z, same as the human walkers
    // did).
    function buildCritter({ bodyColor, snoutColor, hornColor, hasHorns, hasHump }) {
      const mat = toon(bodyColor);
      const group = new THREE.Group();

      const body = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), mat));
      body.scale.set(1.05, 1.0, 1.7);
      body.position.set(0, 0.62, 0);
      group.add(body);

      if (hasHump) {
        const hump = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.34, 8, 6), mat));
        hump.position.set(0, 0.98, 0.35);
        group.add(hump);
      }

      const head = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.32, 9, 7), mat));
      head.scale.set(0.95, 1, 1.05);
      head.position.set(0, 0.85, 0.78);
      group.add(head);

      const snout = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.16, 7, 6), toon(snoutColor)));
      snout.scale.set(0.85, 0.8, 1.2);
      snout.position.set(0, 0.76, 1.06);
      group.add(snout);

      if (hasHorns) {
        [-0.14, 0.14].forEach((xOff) => {
          const horn = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.32, 6), toon(hornColor)));
          horn.position.set(xOff, 1.12, 0.66);
          horn.rotation.x = -0.5;
          horn.rotation.z = xOff > 0 ? -0.35 : 0.35;
          group.add(horn);
        });
      } else {
        [-0.22, 0.22].forEach((xOff) => {
          const ear = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.13, 6, 5), mat));
          ear.position.set(xOff, 1.14, 0.58);
          group.add(ear);
        });
      }

      const legGeo = new THREE.CylinderGeometry(0.11, 0.1, 0.62, 6);
      const legs = [
        [-0.24, 0.15, 0.55],
        [0.24, 0.15, 0.55],
        [-0.24, 0.15, -0.55],
        [0.24, 0.15, -0.55],
      ].map(([x, y, z]) => {
        const leg = shadowed(new THREE.Mesh(legGeo, mat));
        leg.position.set(x, y, z);
        group.add(leg);
        return leg;
      });

      const tail = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.5, 5), mat));
      tail.position.set(0, 0.75, -0.95);
      tail.rotation.x = 0.9;
      group.add(tail);

      group.scale.setScalar(1.5); // reads clearly at the scene's scale without crowding the sidewalk
      return { group, legs };
    }

    function spawnCritter(opts, x, z, dir, speed) {
      const { group, legs } = buildCritter(opts);
      group.position.set(x, 0, z);
      group.rotation.y = dir > 0 ? 0 : Math.PI;
      nyc.add(group);
      critterStates.push({ model: group, legs, dir, speed, phase: Math.random() * Math.PI * 2 });
    }

    spawnCritter(
      { bodyColor: 0x8a4a2e, snoutColor: 0xe8dcc0, hornColor: 0xe8dcc0, hasHorns: true, hasHump: false },
      -2.6,
      -18,
      1,
      1.0
    );
    spawnCritter(
      { bodyColor: 0x3d2b1f, snoutColor: 0xc9a876, hasHorns: false, hasHump: true },
      2.4,
      -30,
      -1,
      0.85
    );

    scene.add(nyc);

    // Sized/positioned to cover every NYC landmark's real footprint,
    // including the deep-background trio (Woolworth, JPMorgan, ESB) out
    // past x=-60/z=-45, and ESB's own isolated spot out past x=-115 —
    // each time a landmark's placement has outrun this plane's edge it
    // rendered floating with no ground underneath it, so this needs
    // re-checking against the widest/deepest current placement whenever
    // one moves.
    const groundNyc = new THREE.Mesh(new THREE.PlaneGeometry(130, 160), toon(0x2b2823));
    groundNyc.rotation.x = -Math.PI / 2;
    groundNyc.position.set(-58, -0.06, -20);
    groundNyc.receiveShadow = true;
    scene.add(groundNyc);

    // ---------- Texas A&M campus: 3 landmarks, one tree, done well ----------
    const campus = new THREE.Group();
    const maroon = 0x500000;

    // Kyle Field — modeled in Blender: a real revolved (spun) terraced
    // bowl profile squashed to an oval footprint, corner entrance towers
    // with an actual boolean-cut archway, cream exterior shell, field.
    // Loaded async below alongside the other real models; placed here so
    // `campus` already exists when it resolves.

    // Academic Building — loaded async below (kept out of scene setup here
    // the same way Kyle Field is: placed once `campus` exists).

    // Bell Tower — a real modeled Albritton Bell Tower now (see the async
    // block above), placed once `campus` exists, same as Kyle Field and
    // the Academic Building.

    // real tree models are added asynchronously above, once loaded

    scene.add(campus);

    // Extended (was 60x90) to cover Wehner far in back, and widened past
    // its old x=60 edge for the Water Tower now out past the Bell Tower —
    // same floating-building issue the NYC ground plane had if this falls
    // short of a landmark's real footprint.
    const groundCampus = new THREE.Mesh(new THREE.PlaneGeometry(100, 130), toon(0x3d4a30));
    groundCampus.rotation.x = -Math.PI / 2;
    groundCampus.position.set(35, -0.06, -20);
    groundCampus.receiveShadow = true;
    scene.add(groundCampus);

    // Fallback seam while the real road model loads (or if it fails to);
    // sits fractionally lower so the real tiles fully cover it once ready.
    const seam = new THREE.Mesh(new THREE.PlaneGeometry(5, 90), toon(maroon));
    seam.rotation.x = -Math.PI / 2;
    seam.position.set(0, -0.04, 0);
    seam.receiveShadow = true;
    scene.add(seam);

    // ---------- camera drift + resize ----------
    let t = 0;
    let raf = 0;
    let running = false;
    let lastTime = performance.now();
    function tick() {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 1000, 0.1); // cap so a stalled/backgrounded tab doesn't teleport the critters on resume
      lastTime = now;
      if (!prefersReduced) {
        t += 0.0009;
        // Diagonal-gait leg swing (front-left+back-right vs. front-right+
        // back-left) stands in for a real walk cycle on the bull/bear,
        // which are plain primitives with no animation clip to play.
        critterStates.forEach((c) => {
          c.model.position.z += c.dir * c.speed * delta;
          if (c.model.position.z > 0) c.model.position.z = ROAD_MIN_Z;
          if (c.model.position.z < ROAD_MIN_Z) c.model.position.z = 0;
          c.phase += delta * c.speed * 3.2;
          const swing = Math.sin(c.phase) * 0.5;
          c.legs[0].rotation.x = swing;
          c.legs[3].rotation.x = swing;
          c.legs[1].rotation.x = -swing;
          c.legs[2].rotation.x = -swing;
          c.model.position.y = Math.abs(Math.sin(c.phase)) * 0.05;
        });
      }
      // Pulled back and raised, aimed higher up the buildings' height
      // instead of near their base — the old radius/lookAt combo cropped
      // the tops of the 42-46-unit-tall NYC towers out of frame entirely.
      const radius = 84;
      camera.position.x = Math.sin(t) * 8 - 2;
      camera.position.z = radius + Math.cos(t * 0.55) * 7;
      camera.position.y = 25 + Math.sin(t * 0.35) * 2;
      camera.lookAt(0, 17, -4);
      composer.render();
      // Reduced-motion renders exactly one frame (a fixed composition,
      // since t never advances above) and stops — no reason to keep
      // driving the GPU every frame for a picture that isn't changing.
      if (running && !prefersReduced) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    }

    function startLoop() {
      if (running) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    }
    function stopLoop() {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    }

    // .hero-3d is full-bleed (not capped by .wrap like the rest of the
    // page), so its aspect ratio grows a lot on wide monitors. A fixed
    // vertical FOV under a growing aspect ratio widens the *horizontal*
    // FOV to match — the camera pulls back and reveals more of the scene
    // sideways instead of the buildings simply getting bigger, spreading
    // them out with empty gaps. Past MAX_ASPECT, hold the horizontal FOV
    // (from MAX_ASPECT) constant instead and shrink the vertical FOV to
    // match — the extra width just crops sky/ground top and bottom,
    // rather than composing more of the scene into frame.
    const MAX_ASPECT = 1.9;
    function resize() {
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return; // avoids a zero-size framebuffer while the pane is hidden/collapsing
      const aspect = w / h;
      if (aspect > MAX_ASPECT) {
        const baseVFovRad = (BASE_FOV * Math.PI) / 180;
        const hFovAtMax = 2 * Math.atan(Math.tan(baseVFovRad / 2) * MAX_ASPECT);
        camera.fov = (2 * Math.atan(Math.tan(hFovAtMax / 2) / aspect) * 180) / Math.PI;
      } else {
        camera.fov = BASE_FOV;
      }
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      composer.setSize(w, h);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();

    // Off-tab-view visitors (scrolled past the hero, or the tab isn't
    // frontmost) shouldn't keep this scene rendering every frame — a
    // generous rootMargin means the loop resumes just before the hero
    // scrolls back into view, not the instant a single pixel of it does.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { rootMargin: "200px" }
    );
    io.observe(canvas.parentElement);

    return () => {
      cancelled = true;
      io.disconnect();
      stopLoop();
      ro.disconnect();
      composer.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        }
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      role="img"
      aria-label="A cinematic low-poly 3D scene where the New York City skyline — anchored by the Empire State Building, One World Trade Center, the Chrysler Building, the Woolworth Building, the Flatiron Building, 40 Wall Street, JPMorgan Chase's 270 Park Avenue, the Guggenheim Museum, the Vessel, the Brooklyn Bridge, and a bronze Wall Street bull statue, with a bull and a bear pacing the sidewalk — gives way across a maroon dividing road to the Texas A&M campus at dusk: Kyle Field's tiered bowl, the domed Academic Building, the Albritton Bell Tower, the Aggieland water tower, and the Century Tree, under a gradient sunset sky with stars."
    />
  );
}
