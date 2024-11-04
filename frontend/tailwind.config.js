/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui:{
    themes: [
      {
        railMadad: {
          'primary': '#930A3F',
          'secondary': '#F48320', 
          'accent': '#FDFFFE',
          'neutral': '#EFE4E8',
          'outline': '#DDDFF9', 
          'gray': '#9ca3af',
          'black': '#000000',
          'white': '#ffffff'
        },
      },
    ],
  },
}

