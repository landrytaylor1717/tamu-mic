"use client";

import { useState } from "react";

// Falls back to the existing swatch placeholder if the photo file isn't
// there (or hasn't been added yet) instead of showing a broken-image icon.
export default function SitePhoto({ src, alt, className, height }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={className ? `${className} swatch` : "swatch"} style={height ? { height } : undefined} aria-hidden="true" />;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      style={height ? { height } : undefined}
      onError={() => setFailed(true)}
    />
  );
}
