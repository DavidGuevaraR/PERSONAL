module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todas las rutas necesarias
  ],
  theme: {
    extend: {
      colors: {
        "fut-black": "#1A1A1A",
        "fut-gold": "#FFD700",
        "fut-gray": "#333333",
        "fut-offwhite": "#F5F5F5",
      },
    },
  },
  plugins: [],
}
