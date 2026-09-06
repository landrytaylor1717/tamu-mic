# Maroon Skyline hero — render style brief

## Concept
A low-poly, flat-shaded 3D scene split down the middle by a maroon dividing road: the New York City skyline on one side, the Texas A&M campus on the other, at dusk. Think a Kenney.nl city-kit game asset, not a photoreal architectural render. Inspiration: the visual polish of bruno-simon.com's portfolio scene — but NOT its exact subject matter, and not literally copied.

## Geometry
- Every hard edge gets a small bevel (soft chamfer, not a razor-sharp 90°). This is the single biggest thing separating "cheap 3D" from "designed" — sharp-cornered primitives read as programmer art; beveled ones read as modeled.
- Curved surfaces (domes, cylinders, towers) use enough radial segments to read as round, not faceted/octagonal — 20+ segments minimum, more for anything prominent.
- Real architectural cues over generic boxes: setback tiers on a skyscraper, cornice ledges between them, terraced/stepped decks on a stadium bowl (not a smooth cone), columns + pediment + dome + cupola on a civic building, tiered cylinders + spire on a bell tower.
- Landmarks should be recognizable in silhouette alone — a stadium reads as a stadium, a domed building reads as domed, without needing detail closer than a wide establishing shot would show.

## Shading — the most important rule
**Flat/toon shading, not physically-based rendering.** Every material is a solid flat matte color — no photo textures, no baked PBR maps, no realistic specular highlights. Use a quantized/stepped lighting response (a 3-4 band toon gradient), not a smooth photorealistic falloff. This is what makes low-poly geometry look intentional instead of "unfinished default renderer" — PBR lighting on a low-segment-count shape produces harsh, shifting facets; toon shading produces clean, stable bands of color.

## Color palette
- **NYC side**: cream/tan building facades (`#d9cca8`–`#efe6cf` range), blue-glass tower accents, dark charcoal accents (`#2a2620`, `#38383d`) for mast/structural elements, warm terracotta accent (`#a8604a`/`#b06041`) for brick/masonry.
- **Campus side**: Texas A&M maroon as the dominant brand color (`#500000` official, `#6b2739`–`#6b2334` as a slightly warmer/brighter "rendering" maroon that reads better under toon shading than the true-black-maroon), paired with warm cream/sandstone (`#d9cca8`, `#ede6d6`) and warm grey-tan (`#b7a98f`) for stone/exterior walls.
- **Shared/neutral**: dark charcoal for mast tips, roofs, and structural dark accents; a warm off-white/cream (`#e7e0d0`, `#ede6d6`) for trim, cornices, lane markings, and cap details.
- **Sky**: dusk gradient from deep purple (`#140b22`) through maroon-tinted pink (`#7a2f3a`) to warm orange-gold (`#f6c979`) at the horizon — ties the "maroon" brand color into the atmosphere itself, not just the buildings.

## Lighting & atmosphere
- One warm directional "sun" light low on the horizon (dusk angle), soft ambient/hemisphere fill so shadow sides aren't pure black, a cool-toned rim light from the opposite side for separation.
- Real cast shadows from every grounded object.
- A subtle bloom/glow on the sky's sun disc and any small emissive accents (aviation beacon light, stadium floodlights) — restrained, not blown out.
- Faint starfield in the upper sky, fog that gently desaturates far-distance objects toward the sky color.

## Composition
- Camera at a 3/4 elevated angle — high enough to read rooflines and silhouettes clearly, not a flat street-level view.
- Landmarks spaced with clear gaps between them (not crowded) — legibility of each individual shape matters more than density. Adding more buildings doesn't improve the render if the ones present aren't well-formed.
- A clear dividing line (here: a maroon road with a painted centerline) separating the two "halves" of the scene, reinforcing the dual-identity concept.

## What to avoid
- Realistic/PBR materials, photo textures, or normal maps — anything that reads as "trying to be real" fights the low-poly style.
- Sharp unbeveled corners on primary shapes.
- Low segment-count curves that read as faceted polygons instead of smooth curves.
- Overcrowding the scene with extra objects instead of improving the quality of the ones already there.
