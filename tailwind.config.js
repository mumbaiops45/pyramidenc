//   /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primery: "#F5B400",
//         "primery-dark": "#D99A00",
//         "primery-light": "#FFC107",

//         black: "#0A0A0A",
//         "black-soft": "#121212",
//         "black-light": "#1A1A1A",

//         gray: {
//           200: "#E0E0E0",
//           400: "#A0A0A0",
//           600: "#666666",
//         },
//       },
//       fontFamily: {
//         sans: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Ensures `font-poppins` works, and Poppins is the default sans
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Map CSS variables → Tailwind color tokens
        // Usage: text-primery, bg-primery, border-primery, etc.
        primery:      "var(--primery)",
        "primery-dark":  "var(--primery-dark)",
        "primery-light": "var(--primery-light)",
        "black-deep": "var(--black-deep)",
        "black-soft": "var(--black-soft)",
        "black-light": "var(--black-light)",
        "gray-200":   "var(--gray-200)",
        "gray-400":   "var(--gray-400)",
        "gray-600":   "var(--gray-600)",
        border:       "var(--color-border)",
      },
    },
  },
  plugins: [],
};