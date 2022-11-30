/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#006B55',
        'secondary': '#53625B',
        'tertiary': '#4D616E',
        'onSurface': '#1A1C1B',
        'surface': '#FCFCFA',
        'primaryContainer': '#AAF1D8',
        'secondaryContainer': '#D6E6DE',
        'tertiaryContainer': '#D0E6F4',
        'surface1': '#f1f5f2',
        'secondary60': '#7D968C',
        'surfaceVariant': '#DEE4E0',
        'onSurfaceVariant': '#424845'
      }
    },
  },
  plugins: [],
}
