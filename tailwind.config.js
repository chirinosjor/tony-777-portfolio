/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        header_bg_image: 'url(\'../public/assets/header.jpg\')'
      },
      colors: {
        lightRebelRed: '#eb1f33',
        darkRebelRed: '#C51223'
      }

    }

  },
  plugins: []
};
