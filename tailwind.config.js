/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        win95: {
          desktop: '#008080',   // Classic deep teal background
          surface: '#c0c0c0',   // Standard window gray
          titlebar: '#000080',  // Active window dark blue
          titlebarInactive: '#808080',
          text: '#000000',      // Standard black text
          highlight: '#ffffff', // 3D bevel top/left
          shadow: '#808080',    // 3D bevel bottom/right inner
          darkShadow: '#000000',// 3D bevel bottom/right outer
          teal: '#008080',
          yellow: '#ffff00',
          green: '#00ff00',
        },
        macos: {
          surface: '#ffffff',   // System 7 stark white
          stripes: '#000000',   // Classic title bar stripes
          highlight: '#02abea', // Classic Mac light blue
          accent: '#dd0806',    // Classic Mac red
        }
      },
      fontFamily: {
        'pixel': ['var(--font-pixel)', '"Press Start 2P"', 'cursive'], 
        'terminal': ['var(--font-terminal)', 'VT323', 'monospace'], 
        'system': ['var(--font-system)', 'Silkscreen', 'sans-serif'], 
      },
      boxShadow: {
        'win95-out': 'inset 1px 1px 0px 0px #ffffff, inset -1px -1px 0px 0px #000000, inset 2px 2px 0px 0px #c0c0c0, inset -2px -2px 0px 0px #808080',
        'win95-in': 'inset 1px 1px 0px 0px #000000, inset -1px -1px 0px 0px #ffffff, inset 2px 2px 0px 0px #808080, inset -2px -2px 0px 0px #c0c0c0',
        'win95-flat': '2px 2px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
