module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0d9488', // Teal 600
        accent: '#14b8a6',  // Turquoise/Teal 500
        dark: '#030712',    // Deep Black
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
