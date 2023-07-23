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
        'default': 'linear-gradient(#0ba730 0 0),linear-gradient(#41a221 0 0);',
        'purple': 'linear-gradient(#8e2de2 0 0), linear-gradient(#4a00e0 0 0)',
        'pink': 'linear-gradient(#f953c6 0 0), linear-gradient(#b91d73 0 0)',
        'green': 'linear-gradient(#414d0b 0 0), linear-gradient(#727a17 0 0)',
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
