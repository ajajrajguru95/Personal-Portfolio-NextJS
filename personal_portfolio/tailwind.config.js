/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1200px",
      },
      colors: {
        primary: "#ffc25c",
        background: "#333646",
        textColor: "#ebebec",
        textLight: "#a9a9a9",
        themeDark: "#252734",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addBase, theme }) => {
      addBase({
        html: {
          fontSize: "10px",
        },
        body: {
          color: theme("colors.textColor"),
          background: theme("colors.background"),
          fontSize: "1.6rem",
          margin: "0",
        },
      });
      addComponents({
        h1:{
          fontSize: "6rem",
          fontWeight: "600",
          lineHeight: "1.1",
        }
      });
    }),
  ],
};
