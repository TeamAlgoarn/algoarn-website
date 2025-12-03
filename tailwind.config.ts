// // tailwind.config.ts
// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         algoarnBlue: "#0ea5e9",
//         algoarnAqua: "#22d3ee",
//         carbonBlack: "#0b0f13",
//       },
//       borderRadius: {
//         glass: "1.5rem", // use class: rounded-glass
//       },
//       boxShadow: {
//         neon: "0 0 40px rgba(14,165,233,0.35)", // use class: shadow-neon
//       },
//       backgroundImage: {
//         "hero-grid":
//           "radial-gradient(circle at top, rgba(34,211,238,0.15), #0b0f13 60%)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;


// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        algoarnBlue: "#0ea5e9",
        algoarnAqua: "#22d3ee",
        carbonBlack: "#0b0f13",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)",
      },
      boxShadow: {
        neon: "0 0 25px rgba(34, 211, 238, 0.35)",
        "neon-strong": "0 0 45px rgba(34, 211, 238, 0.6)",
      },
      borderRadius: {
        glass: "24px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
