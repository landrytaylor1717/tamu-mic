"use client";

import { useId, useState } from "react";
import { LEVELS, areas } from "@/lib/bookFinder";
import BookCover from "@/components/BookCover";

function BookCard({ book }) {
  const [open, setOpen] = useState(false);
  const detailId = useId();

  return (
    <div className={`finder-book${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="finder-book-toggle"
        aria-expanded={open}
        aria-controls={detailId}
        onClick={() => setOpen((o) => !o)}
      >
        <BookCover src={book.cover} />
        <span className="finder-book-titles">
          <span className="finder-book-title">{book.title}</span>
          <span className="finder-book-author">{book.author}</span>
        </span>
        <span className="finder-book-chevron" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <p className="finder-book-tagline">{book.tagline}</p>
      {open && (
        <div className="finder-book-detail" id={detailId}>
          <h4>Summary</h4>
          <p>{book.summary}</p>
          <h4>What you&apos;ll learn</h4>
          <ul>
            {book.learn.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h4>How it&apos;s organized</h4>
          <p>{book.structure}</p>
        </div>
      )}
    </div>
  );
}

function AreaResults({ area, level }) {
  const books = area.levels[level];
  return (
    <div className="finder-area-results">
      <div className="finder-area-results-head">
        <h3>{area.name}</h3>
        <span className="finder-area-results-level">{level}</span>
      </div>
      <div className="finder-book-grid">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function BookFinder() {
  const [selected, setSelected] = useState(() => new Set());
  const [level, setLevel] = useState(null);

  function toggleArea(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const selectedAreas = areas.filter((a) => selected.has(a.id));

  return (
    <div className="finder">
      <div className="finder-step">
        <div className="finder-step-label">Step 1 — what are you curious about?</div>
        <div className="finder-areas">
          {areas.map((area) => {
            const checked = selected.has(area.id);
            return (
              <label className={`finder-area${checked ? " is-checked" : ""}`} key={area.id}>
                <input type="checkbox" checked={checked} onChange={() => toggleArea(area.id)} />
                <span className="finder-area-name">{area.name}</span>
                <span className="finder-area-subtitle">{area.subtitle}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="finder-step">
        <div className="finder-step-label">Step 2 — where are you starting from?</div>
        <div className="finder-levels" role="radiogroup" aria-label="Expertise level">
          {LEVELS.map((lv) => (
            <label className={`finder-level${level === lv ? " is-checked" : ""}`} key={lv}>
              <input
                type="radio"
                name="finder-level"
                value={lv}
                checked={level === lv}
                onChange={() => setLevel(lv)}
              />
              {lv}
            </label>
          ))}
        </div>
      </div>

      <div className="finder-results">
        {selectedAreas.length === 0 ? (
          <p className="finder-prompt">Check at least one area above to get started.</p>
        ) : !level ? (
          <p className="finder-prompt">Pick a level above to see recommendations.</p>
        ) : (
          selectedAreas.map((area) => <AreaResults key={area.id} area={area} level={level} />)
        )}
      </div>
    </div>
  );
}
