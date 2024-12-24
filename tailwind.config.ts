import type { Config } from 'tailwindcss';
import * as colors from 'tailwindcss/colors';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#8aa6a8',
      'pinkish': '#9C8AA8',
      'orangeish': '#A88C8A',
      'muted-green': '#96A88A',
      ...colors
    }
  },
  plugins: [],
} satisfies Config

