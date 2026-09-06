"use client";

import { useState } from "react";

// Covers are resolved once, offline, against Open Library's search API by
// title/author (see the `cover` field in lib/bookFinder.js) rather than
// looked up live in the browser — with ~80 books in the finder, a live
// fetch per card meant waiting on Open Library's API on every page view.
// A handful of books had no confident match (or matched a study guide
// instead of the real book) and were deliberately left without a `cover`,
// which falls back to the plain swatch below rather than showing nothing
// or a wrong cover.
export default function BookCover({ src }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className="finder-book-cover finder-book-cover-swatch" aria-hidden="true" />;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className="finder-book-cover"
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
