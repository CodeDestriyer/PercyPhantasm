/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        cream: "#FAF7F1",
        ink: "#1A1613",
        sepia: "#3B2A1E",
        brass: "#A8814B",
        rule: "#1A1613",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        serif: ['"EB Garamond"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        plate: "0 1px 0 0 #1A1613, 0 2px 0 0 #1A1613",
      },
    },
  },
  plugins: [],
}
