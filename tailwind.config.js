/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['HankenGrotesk', 'sans'], // 'custom' is the name you'll use in your utility classes
      },
      textColor: {
        'subtitle': '#4080BF',
        'bigtitle': '#202E3C',
        'background': '#F9FAFA',
        'link': '4080BF'
        // Add as many custom colors as you need
      }
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}