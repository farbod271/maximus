/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-50': '50px',
      },
      minWidth: {
        'blog': '900px',
      },
      height: {
        'blog': '400px',
        '300': '300px',
      },
      animation: {
        blink: 'blink 1.3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#cbd5e1' },
        },
      },
    },
  },
  plugins: [],
}

