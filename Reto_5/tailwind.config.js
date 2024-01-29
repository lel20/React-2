/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        Tomato: 'hsl(4, 100%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        Dark_Slate_Grey: 'hsl(234, 29%, 20%)',
        Charcoal_Grey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        Pink: 'rgb(236, 72, 153)',
        Yellow: 'rgb(234, 179, 8)'
      }
    }
  },
  plugins: []
}
