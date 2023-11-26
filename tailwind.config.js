/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#363062',
        secondary: '#4D4C7D',
        accent: '#F99417',
        whiteText: '#F5F5F5',
        darkText: '#1E1E1E',
      },
    },
  },

  plugins: [],
};
