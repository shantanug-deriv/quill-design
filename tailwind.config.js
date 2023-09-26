import quillTailwindConfig from './quill-tailwind/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [quillTailwindConfig],
}
