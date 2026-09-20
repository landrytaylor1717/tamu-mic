"use client";

import dynamic from "next/dynamic";

// Three.js + the model loader are the heaviest JS on the site — deferred
// out of the initial bundle so they load after hydration instead of
// blocking it. The canvas mounts into a plain dark div (matching
// .hero-3d's own background) until then, so there's nothing to flash in.
// `ssr: false` requires a Client Component boundary, hence this
// dedicated wrapper instead of calling dynamic() straight from the
// (server) homepage.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="hero-canvas" />,
});

export default HeroScene;
