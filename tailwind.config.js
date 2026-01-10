/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
      secondary: "#0C2B4E",
        "background-light": "#F4F4F4",
        "text-dark": "#0C2B4E",
        "text-muted": "#5A6B80",
        "text-brand": "#5d94a5"
      },
    },
  },
  plugins: [],
};
 