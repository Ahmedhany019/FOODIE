/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#FE9E0D",
      secondary: "#828282",
    },
    
    extend: {
        keyframes: {
          moveArrow: {
            '0%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(8px)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
        animation: {
          'move-arrow': 'moveArrow .6s infinite ease-in-out',
        },
    }
  },
  plugins: [],
};
