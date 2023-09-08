import quillTailwindConfig from './quill-tailwind/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: { max: '600px' },
      // => @media (max-width: 600px) { ... }

      md: { min: '601px', max: '1279px' },
      // => @media (min-width: 601px and max-width: 1279px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
  presets: [quillTailwindConfig],
}
