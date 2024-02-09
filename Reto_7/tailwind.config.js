export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}

