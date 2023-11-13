import quillTailwindConfig from './quill-tailwind/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
  presets: [quillTailwindConfig],
}
