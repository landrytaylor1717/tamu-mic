"use client";

import { useState } from "react";

// Falls back to a plain circle if the photo file isn't there yet (or
// hasn't been added at all) instead of showing a broken-image icon.
export default function TeamPhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="team-photo" aria-hidden="true" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="team-photo"
      src={src}
      alt={alt}
      loading="lazy"
      width={168}
      height={168}
      onError={() => setFailed(true)}
    />
  );
}
