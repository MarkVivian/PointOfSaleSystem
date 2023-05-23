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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "gradient1" : "linear-gradient(to top right, #660066 0%, #cc0099 100%)",
        "gradient2" : "linear-gradient(to bottom, #ccccff 0%, #ccffff 100%)",
        "gradient3" : "linear-gradient(to top, #187856, #006e6b, #00617d, #005184, #0b3d7b)"
      }
    },
  },
  plugins: [],
}
