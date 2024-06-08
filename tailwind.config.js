/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'background-dark': "url('https://i.pinimg.com/564x/7c/65/1c/7c651c1b9deb7a2ae1f55237df917a84.jpg')",
        'background-white': "url('')"
      }
    },
  },
  plugins: [],
}

