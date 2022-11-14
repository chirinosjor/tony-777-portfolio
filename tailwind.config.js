/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          header_bg_image: 'url(\'../public/assets/header.jpg\')'
        }
      }
    }
  },
  plugins: []
};
