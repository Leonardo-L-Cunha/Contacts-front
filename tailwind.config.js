/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor:{
        'bg-primary': '#111315',
        'bg-secundary': '#475BE8',
        'bg-gray-segundary': '#1A1D1F',
        'bg-input': '#343B41',
        'bg-button': ' #1E1E1E'
      },
      colors:{
        'text-gray' : '#6F767E'
      },
      width: {
        '500': '31.25rem',
        '90%': '90%',
        
      },
      maxWidth:{
        '350': '350px'
      },
      height:{
        '500': '31.25rem'
      },
      borderColor:{
        'gray-main': '#1E1E1E'
      }
      
    },
  },
  plugins: [],
}

