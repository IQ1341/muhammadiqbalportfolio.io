/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
          primary: "hsl(344,100%,37%)",
        dark: '#0f172a ',
        secondary: '#64748b',
        bgr: '#F7DDA4',       
      },

  //     colors: {
  // primary: "hsl(344,100%,37%)",

  // dark: "hsl(230,15%,10%)",
  // dark2: "hsl(230,10%,15%)",
  // text: "hsl(0,0%,92%)",
  // textSec: "hsl(0,0%,70%)",
  // border: "hsl(224,20%,60%)",
// },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
