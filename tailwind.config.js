module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4DABB7',
        customBlack: '#2A2B4B', 
        customGray: "#3c6072", 
        customGray100:'#527283', 
        customGreen: "#0B646B", 
      },
    },

  },
  plugins: [],
}