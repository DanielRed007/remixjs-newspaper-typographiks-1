import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        pacifico: ['"Pacifico"', "sans-serif"],
      },
      colors: {
        "electric-cyan": "rgb(0, 255, 255)",
        "electric-cyan-dark": "rgb(0, 200, 200)",
        "electric-magenta": "rgb(255, 0, 255)",
        "electric-magenta-dark": "rgb(200, 0, 200)",
        "electric-yellow": "rgb(255, 255, 0)",
        "electric-yellow-dark": "rgb(200, 200, 0)",
        "electric-black": "rgb(0, 0, 0)",
        "electric-black-dark": "rgb(50, 50, 50)",
      },
      fontSize: {
        fontzilla: "14rem", // You can change this to any size you want
      },
    },
  },
  plugins: [],
} satisfies Config;
