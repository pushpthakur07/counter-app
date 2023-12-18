

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '11': '3rem', // Corresponds to left-32, sets the element 8rem from the left
      },
      colors: {
        customLime: '#ECEEB2', // Custom color definition
        customGreen: {
          500: '#00FF00', // Different shades of a custom color
          700: '#007700',
        },
        // Add more custom colors as needed
      },
      width: {
        '25': '1.563rem', // Custom width value
      },
      height: {
        '25': '1.563rem', // Custom height value
      },

    },
  },
  plugins: [],
}