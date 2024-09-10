/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        'screen-m-72': 'calc(100vh - 72px)',
      },
    },
  },
  plugins: [],
}
