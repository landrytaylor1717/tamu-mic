// Real trips only — the Travel Series has run twice so far, both in-state.
// Add a new entry here (and drop its photos in
// public/images/travel-series/) once a new trip actually happens, rather
// than listing cities aspirationally.
export const trips = [
  {
    id: "austin",
    city: "Austin",
    eyebrow: "IN-STATE CIRCUIT",
    summary:
      "Members sat down with Dimensional Fund Advisors and Sixth Street at their Austin offices — portfolio construction, factor investing, and how systematic and credit shops actually run money day to day — then closed out the trip on a rooftop overlooking downtown.",
    photos: [
      { src: "/images/travel-series/austin-1.jpg", alt: "Members with a Dimensional Fund Advisors host on their Austin office terrace" },
      { src: "/images/travel-series/austin-2.jpg", alt: "The group in front of the Sixth Street sign at their Austin office" },
      { src: "/images/travel-series/austin-3.jpg", alt: "Members on a rooftop terrace overlooking the Austin skyline" },
    ],
  },
  {
    id: "houston",
    city: "Houston",
    eyebrow: "IN-STATE CIRCUIT — MARCH 20",
    summary:
      "A day trip through Houston's energy and private equity scene, based out of Cross Timbers' offices: back-to-back visits with Jackson Hill Advisors, Sallyport Investments, and Park Partners, capped off with a fireside chat panel featuring Cross Timbers, The Terry Foundation, and Quantum Energy Partners.",
    photos: [
      { src: "/images/travel-series/houston-1.jpg", alt: "A panel of four speakers at the Houston fireside chat" },
      { src: "/images/travel-series/houston-2.jpg", alt: "The full group photographed together in Houston" },
    ],
  },
];
