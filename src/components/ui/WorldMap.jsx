/**
 * WorldMap — animated dotted world map with glowing connection routes,
 * pulsing hub nodes and drifting particles. Represents global opportunity.
 * Pure SVG + CSS, no dependencies.
 */

// Coarse equirectangular land mask (50 cols × 24 rows). "#" = land dot.
const LAND = [
  "                                                  ",
  "        ######     ###          #############     ",
  "       #########   ###   ###  ##################   ",
  "      ###########       #####  #################   ",
  "      ##########        ######  ################   ",
  "       ########         ######################     ",
  "        #######         #####################      ",
  "         #####          ####################       ",
  "           ###          #############   #####      ",
  "              ####       ###########    #####      ",
  "              #####      ########         #####    ",
  "              ######      ######          #####    ",
  "              ######      #####                    ",
  "               #####      ####             #####   ",
  "               ####       ###             ######   ",
  "               ####                        ####    ",
  "               ###                          ###    ",
  "               ###                                 ",
  "               ##                                  ",
  "               ##                                  ",
  "                                                   ",
  "                                                   ",
  "                                                   ",
  "                                                   ",
];

const VB_W = 1000;
const VB_H = 480;
const COLS = 50;
const ROWS = 24;

const dots = [];
LAND.forEach((row, r) => {
  for (let c = 0; c < row.length; c++) {
    if (row[c] === "#") {
      dots.push({
        x: (c / (COLS - 1)) * VB_W,
        y: (r / (ROWS - 1)) * VB_H,
      });
    }
  }
});

const pt = (col, row) => ({
  x: (col / (COLS - 1)) * VB_W,
  y: (row / (ROWS - 1)) * VB_H,
});

// Hub cities
const HUB_INDIA = pt(35, 9);
const HUB_JAPAN = pt(46, 6);
const HUB_EU = pt(26, 4);
const HUB_US = pt(13, 5);
const HUB_SG = pt(41, 11);
const HUB_AU = pt(46, 14);

const HUBS = [
  { ...HUB_INDIA, label: "India", primary: true },
  { ...HUB_JAPAN, label: "Japan", gold: true },
  { ...HUB_EU, label: "Europe" },
  { ...HUB_US, label: "Americas" },
  { ...HUB_SG, label: "Singapore" },
  { ...HUB_AU, label: "Australia" },
];

// Curved route between two points (control lifted above the midpoint)
const arc = (a, b, lift = 70) => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - lift;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
};

const ROUTES = [
  { d: arc(HUB_INDIA, HUB_JAPAN, 60), dur: "3s", gold: true },
  { d: arc(HUB_INDIA, HUB_EU, 80), dur: "3.6s" },
  { d: arc(HUB_INDIA, HUB_US, 120), dur: "4.4s" },
  { d: arc(HUB_INDIA, HUB_SG, 40), dur: "2.8s" },
  { d: arc(HUB_JAPAN, HUB_AU, 90), dur: "3.8s", gold: true },
  { d: arc(HUB_EU, HUB_US, 70), dur: "4s" },
];

export default function WorldMap() {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="routeTeal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="routeGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e3c873" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* dotted land */}
      <g fill="#5eead4">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="3.4" opacity="0.28" />
        ))}
      </g>

      {/* glowing routes */}
      <g fill="none" filter="url(#glow)">
        {ROUTES.map((route, i) => (
          <g key={i}>
            <path
              d={route.d}
              stroke={route.gold ? "url(#routeGold)" : "url(#routeTeal)"}
              strokeWidth="2"
              opacity="0.55"
              className="conn-line"
            />
            {/* travelling pulse */}
            <circle r="4" fill={route.gold ? "#e3c873" : "#5eead4"}>
              <animateMotion dur={route.dur} repeatCount="indefinite" path={route.d} />
            </circle>
          </g>
        ))}
      </g>

      {/* hub nodes */}
      <g filter="url(#glow)">
        {HUBS.map((h, i) => {
          const color = h.gold ? "#e3c873" : h.primary ? "#fff" : "#5eead4";
          return (
            <g key={i}>
              <circle cx={h.x} cy={h.y} r={h.primary ? 7 : 5} fill={color} />
              <circle
                cx={h.x}
                cy={h.y}
                r={h.primary ? 7 : 5}
                fill="none"
                stroke={color}
                strokeWidth="2"
                opacity="0.6"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `node-pulse ${2.4 + i * 0.3}s ease-out infinite`,
                }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
