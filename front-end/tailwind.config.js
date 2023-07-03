/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width : {
        '98' : '28rem',
        '100' : '30rem',
        '102' : '32rem',
        '104' : '34rem',
        '106' : '36rem',
        '108' : '38rem'
      },
      height : {
        '97' : '26rem',
        '98' : '28rem',
        '100' : '30rem',
        '102' : '32rem',
        '104' : '34rem',
        '106' : '36rem',
        '108' : '38rem'
      }
    },
  },
  plugins: [],
}
