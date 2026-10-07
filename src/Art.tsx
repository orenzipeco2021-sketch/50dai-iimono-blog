import React from "react";
const ink = "#736b5c";
export function TopicIcon({ topic }: { topic: string }) {
  const paths: Record<string, React.ReactNode> = {
    beauty: (
      <>
        <rect x="10" y="12" width="12" height="17" rx="3" />
        <path d="M13 12V5h6v7M12 21h8M26 9v6m-3-3h6" />
      </>
    ),
    home: (
      <>
        <path d="M5 15 17 5l12 10M8 13v16h18V13M14 29V19h6v10" />
      </>
    ),
    fashion: (
      <>
        <path d="m11 6-7 7 5 5 3-3v14h12V15l3 3 5-5-7-7-5 3-4-3z" />
      </>
    ),
    travel: (
      <>
        <rect x="7" y="10" width="22" height="19" rx="3" />
        <path d="M13 10V5h10v5M12 14v10m12-10v10M12 29v2m12-2v2" />
      </>
    ),
    gourmet: (
      <>
        <path d="M7 12h18v9a9 9 0 0 1-18 0zM25 13h3a4 4 0 0 1 0 8h-3M5 31h25M12 4v3m7-3v3" />
      </>
    ),
    pet: (
      <>
        <ellipse cx="10" cy="12" rx="3" ry="4" />
        <ellipse cx="18" cy="8" rx="3" ry="4" />
        <ellipse cx="26" cy="12" rx="3" ry="4" />
        <path d="M10 23c0-6 4-7 8-7s8 1 8 7c0 7-5 4-8 4s-8 3-8-4Z" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[topic]}
    </svg>
  );
}
export function StillLife({ kind = "hero" }: { kind?: string }) {
  const backgrounds: Record<string, string> = {
    hero: "#e9e3d7",
    beauty: "#eee0da",
    home: "#e5e3d5",
    fashion: "#e8ded2",
    travel: "#dee5df",
    gourmet: "#eadfcd",
    pet: "#e5dfd6",
  };
  return (
    <svg className="still-life" viewBox="0 0 600 420" aria-hidden="true">
      <rect width="600" height="420" fill={backgrounds[kind]} />
      <path d="M400 0h200v270H320Z" fill="#fff" opacity=".22" />
      <path
        d="m460 0-80 270M530 0l-60 270"
        stroke="#fff"
        strokeWidth="7"
        opacity=".3"
      />
      <path d="M0 310q260-25 600 0v110H0" fill="#d6c7b1" opacity=".65" />
      {(kind === "hero" || kind === "home") && (
        <>
          <ellipse
            cx="235"
            cy="344"
            rx="130"
            ry="20"
            fill="#756b51"
            opacity=".13"
          />
          <path d="M125 250h185l-15 96H140Z" fill="#e9ddc7" />
          <path
            d="M148 257h138M145 270h143M143 285h147M141 301h153M143 318h150M148 333h141"
            stroke="#c7b397"
            strokeWidth="2"
          />
          <path
            d="M175 260q-50-130-2-203M212 260q60-150 20-215M238 260q65-77 75-125"
            fill="none"
            stroke="#69745a"
            strokeWidth="4"
          />
          {[
            [166, 90, -30],
            [147, 135, -55],
            [176, 182, 30],
            [240, 90, 30],
            [254, 140, -30],
            [221, 190, -40],
            [289, 165, 20],
            [274, 214, -25],
          ].map(([x, y, r], i) => (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="15"
              ry="34"
              fill={i % 2 ? "#909877" : "#6e7d62"}
              transform={`rotate(${r} ${x} ${y})`}
            />
          ))}
          <path d="M350 333h150v18H350Z" fill="#9b7765" />
          <path d="M342 315h148v18H342Z" fill="#f7f0df" />
          <path d="M350 321h133m-133 6h133" stroke="#ddd3be" />
          <ellipse cx="410" cy="306" rx="69" ry="9" fill="#b2a18d" />
          <path d="M375 253h69v34q-3 26-34 26t-35-26Z" fill="#fcf6e8" />
          <ellipse cx="410" cy="253" rx="35" ry="9" fill="#d2c0a7" />
          <ellipse cx="410" cy="254" rx="28" ry="5" fill="#8b6044" />
          <path
            d="M444 263q37-10 23 24-8 10-23 6"
            fill="none"
            stroke="#fcf6e8"
            strokeWidth="10"
          />
          <path d="M516 353h39v-83h-39Z" fill="#ae8b6f" />
          <path d="M524 270v-15h24v15" fill="#625d4e" />
          <rect x="522" y="291" width="27" height="35" fill="#eae0cd" />
        </>
      )}
      {kind === "beauty" && (
        <>
          <ellipse
            cx="300"
            cy="349"
            rx="170"
            ry="17"
            fill="#9c7369"
            opacity=".13"
          />
          <rect
            x="155"
            y="148"
            width="105"
            height="193"
            rx="15"
            fill="#a87960"
          />
          <rect x="171" y="102" width="73" height="51" rx="6" fill="#d3c5ac" />
          <rect x="175" y="212" width="65" height="79" rx="2" fill="#f7ecda" />
          <path
            d="M189 235h37m-31 9h25m-21 25h18"
            stroke="#aa9580"
            strokeWidth="2"
          />
          <rect
            x="308"
            y="248"
            width="130"
            height="92"
            rx="16"
            fill="#f5eadd"
          />
          <rect x="305" y="233" width="136" height="31" rx="8" fill="#b79f89" />
          <path
            d="M467 330q-30-90 30-184"
            fill="none"
            stroke="#8f9174"
            strokeWidth="3"
          />
          <ellipse
            cx="478"
            cy="216"
            rx="13"
            ry="36"
            fill="#9caa8a"
            transform="rotate(32 478 216)"
          />
          <ellipse
            cx="465"
            cy="271"
            rx="12"
            ry="31"
            fill="#9caa8a"
            transform="rotate(-36 465 271)"
          />
        </>
      )}
      {kind === "fashion" && (
        <>
          <path
            d="m196 114 74-30h61l73 30 48 131-60 21-27-76 8 153H224l8-153-28 76-58-21Z"
            fill="#eee9db"
            stroke="#d4cab7"
            strokeWidth="2"
          />
          <path
            d="m270 84 30 69 31-69M300 153v190"
            fill="none"
            stroke="#b9ad99"
            strokeWidth="3"
          />
          <path
            d="M282 95q17-35 36 0"
            fill="none"
            stroke="#b99b68"
            strokeWidth="3"
          />
          <circle cx="300" cy="162" r="5" fill="#ae9267" />
          <path d="m365 290 25-63h68l28 63 9 67H354Z" fill="#977d64" />
          <path
            d="M391 261v-24q0-34 33-34t33 34v24"
            fill="none"
            stroke="#755e4c"
            strokeWidth="8"
          />
          <path d="M369 301h111" stroke="#b99e81" strokeWidth="2" />
        </>
      )}
      {kind === "travel" && (
        <>
          <circle cx="437" cy="100" r="42" fill="#eee6cc" />
          <path
            d="m0 255 125-111 149 129 106-95 220 113v129H0"
            fill="#b0b9a3"
          />
          <path d="m0 309 131-67 139 79 194-104 136 78v125H0" fill="#899983" />
          <path d="m280 420 84-159 12 4-45 155" fill="#e7ddc7" />
          <rect
            x="99"
            y="213"
            width="117"
            height="149"
            rx="17"
            fill="#bc9273"
          />
          <path
            d="M130 213v-32h53v32M127 237v98m61-98v98"
            fill="none"
            stroke="#8d6f59"
            strokeWidth="5"
          />
          <circle cx="125" cy="366" r="7" fill={ink} />
          <circle cx="190" cy="366" r="7" fill={ink} />
        </>
      )}
      {kind === "gourmet" && (
        <>
          <ellipse
            cx="285"
            cy="333"
            rx="176"
            ry="31"
            fill="#bfa98b"
            opacity=".3"
          />
          <ellipse cx="342" cy="324" rx="93" ry="20" fill="#f6efdf" />
          <path d="M292 235h100v47q0 40-50 40t-50-40Z" fill="#f5eee1" />
          <ellipse cx="342" cy="235" rx="50" ry="13" fill="#966744" />
          <path
            d="M390 247q60-10 34 34-10 15-31 11"
            fill="none"
            stroke="#f5eee1"
            strokeWidth="13"
          />
          <ellipse cx="190" cy="331" rx="80" ry="17" fill="#f7eddb" />
          <path d="m141 320 15-65h85l-13 65Z" fill="#c09667" />
          <path d="m150 275 6-20h85l-5 20Z" fill="#e9c688" />
          <path
            d="M328 203q-17-25 0-46m30 46q-17-25 0-46"
            fill="none"
            stroke="#fff9ed"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </>
      )}
      {kind === "pet" && (
        <>
          <ellipse cx="305" cy="337" rx="168" ry="35" fill="#b1a28d" />
          <ellipse cx="305" cy="324" rx="158" ry="36" fill="#d7c5ac" />
          <path
            d="M195 306q-26-107 68-125 103-25 148 98l-23 45H212Z"
            fill="#c3a482"
          />
          <path
            d="M259 202q-30-61-62-23l9 69M317 198q16-69 53-43l-8 90"
            fill="#93775e"
          />
          <ellipse cx="285" cy="249" rx="62" ry="58" fill="#d4b593" />
          <ellipse cx="285" cy="271" rx="35" ry="25" fill="#edddc4" />
          <path
            d="M251 246q8-8 15 0m35 0q8-8 15 0"
            fill="none"
            stroke="#66594b"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="m275 264 10 10 11-10Z" fill="#66594b" />
          <path d="M231 316h109" stroke="#b79878" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}
