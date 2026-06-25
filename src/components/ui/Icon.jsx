/**
 * Icon — lightweight inline SVG icon set (stroke-based, currentColor).
 * Keeps the bundle dependency-free and the icons crisp at any size.
 */
const paths = {
  satellite: (
    <>
      <path d="M5 13l-2 2a3 3 0 0 0 0 4l2 2a3 3 0 0 0 4 0l2-2" />
      <path d="M11 11l2-2" />
      <path d="M13 13l2 2a3 3 0 0 0 4 0l2-2a3 3 0 0 0 0-4l-2-2a3 3 0 0 0-4 0l-2 2" />
      <path d="M16 8l-2-2" />
      <path d="M18 14a4 4 0 0 1 2 2M19 11a7 7 0 0 1 4 4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </>
  ),
  cap: (
    <>
      <path d="M22 9L12 5 2 9l10 4 10-4Z" />
      <path d="M6 10.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5.5" />
      <path d="M22 9v5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" />
      <path d="M12 15l-3-3a11 11 0 0 1 7-8c3 0 4 1 4 4a11 11 0 0 1-8 7Z" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3.5 3.5 0 0 1 0 7M21 20a6 6 0 0 0-4-5.6" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l3-3 4 1 2-2 2 2 4-1 3 3" />
      <path d="M12 10l-2 2a1.5 1.5 0 0 0 2 2l1-1 2 2a1.5 1.5 0 0 0 2-2" />
      <path d="M3 12v4M21 12v4" />
    </>
  ),
  yen: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8l3 4 3-4M12 12v5M9.5 13h5M9.5 15.5h5" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" />,
  star: (
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
      <path d="M8 11h8M8 14h5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="M5 12l5 5 9-11" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4-4" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  language: (
    <>
      <path d="M4 5h8M8 3v2c0 4-2 7-5 9" />
      <path d="M5 9c1.5 3 4 5 7 6" />
      <path d="M13 19l3-7 3 7M14.5 16h4" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l5-5 4 4 8-8" />
      <path d="M16 8h4v4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 4l1.5 4L18 9.5 13.5 11 12 15l-1.5-4L6 9.5 10.5 8 12 4Z" />
      <path d="M18 14l.8 2 2 .8-2 .8L18 20l-.8-2-2-.8 2-.8.8-2Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18M12 21V9l8 2v10" />
      <path d="M7 8h1M7 12h1M7 16h1M16 13h1M16 17h1M3 21h18" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7v.01" />
    </>
  ),
  facebook: (
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5Z" />
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M11 9.5l4 2.5-4 2.5v-5Z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6L4 20Z" />
      <path d="M9 9c0 4 2 6 6 6 .6 0 1-.5 1-1l-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2c-.5 0-1.5.5-1.5 1.5Z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7.5 21 12 18.5 16.5 21 15 13.5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5L13 13l-4.5 2.5L11 11l4.5-2.5Z" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.7 }) {
  const fillIcons = ["facebook"];
  const isFill = fillIcons.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFill ? "currentColor" : "none"}
      stroke={isFill ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
