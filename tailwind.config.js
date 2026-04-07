/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        primary: '#1B4F72',
        primaryDark: '#154360',
        accent: '#922B21',
        background: '#F8F9FA',
        text: {
          primary: '#2C3E50',
          secondary: '#5D6D7E',
        },
        border: '#D5D8DC',
        link: '#2874A6',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Noto Sans SC', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
