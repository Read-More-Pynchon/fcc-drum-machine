/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal': { DEFAULT: '#62f7f1', '50': '#effefd', '100': '#c8fff9', '200': '#91fef6', '300': '#62f7f1', '400': '#1ee3e1', '500': '#06c5c6', '600': '#019ba0', '700': '#067a7f', '800': '#0a6065', '900': '#0e5053', '950': '#002e33', },
        'pink': { DEFAULT:'#fc64d6', '50': '#fef1fb', '100': '#fde6f8', '200': '#feccf3', '300': '#fea3e9', '400': '#fc64d6', '500': '#f63ec3', '600': '#e61ca4', '700': '#c80e85', '800': '#a50f6d', '900': '#8a115d', '950': '#550236', },
        'purple': { DEFAULT: '#6306dd', '50': '#f5f1ff', '100': '#ece5ff', '200': '#dacfff', '300': '#c0a8ff', '400': '#a377ff', '500': '#8840ff', '600': '#7d19ff', '700': '#7008f9', '800': '#6306dd', '900': '#4e07ab', '950': '#2e0075', },
        'blue': { DEFAULT: '#08058a', '50': '#f1f3ff', '100': '#e6e9ff', '200': '#d0d7ff', '300': '#abb4ff', '400': '#7b83ff', '500': '#4646ff', '600': '#2c21ff', '700': '#1d0ff2', '800': '#170ccb', '900': '#150ca6', '950': '#08058a', },
        'blackish': {DEFAULT:'#0a0a0a', '50': '#f6f6f6', '100': '#e7e7e7', '200': '#d1d1d1', '300': '#b0b0b0', '400': '#888888', '500': '#6d6d6d', '600': '#5d5d5d', '700': '#4f4f4f', '800': '#454545', '900': '#3d3d3d', '950': '#0a0a0a'},
        'white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

