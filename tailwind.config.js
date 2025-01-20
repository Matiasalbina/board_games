/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#a7f339", // Color verde personalizado
        customBlue: "#60a5fa", // Color azul personalizado
      },
      fontFamily: {
        title: ["Fredoka One", "sans-serif"], // Fuente para el título
        body: ["Roboto", "sans-serif"], // Fuente para los enlaces y el texto general
      },
    },
  },
  plugins: [require("daisyui")],
  // DaisyUI aún puede ser utilizado, pero sin temas personalizados
};
