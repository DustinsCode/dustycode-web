import type { Config } from "tailwindcss";
import * as colors from "tailwindcss/colors";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            aspectRatio: {
                "16/9": "16 / 9",
                "9/16": "9 / 16",
                "1/1": "1 / 1"
            },
            animation: {
              'scale-x-back-forth': 'scale-x-back-forth 1s infinite',
            },
            keyframes: {
              'scale-x-back-forth': {
                '0%': { transform: 'scaleX(-1)' },
                '50%': { transform: 'scaleX(1)' },
                '100%': { transform: 'scaleX(-1)' },
              },
            },
        },
        colors: {
            primary: "#8aa6a8",
            pinkish: "#9C8AA8",
            orangeish: "#A88C8A",
            "muted-green": "#96A88A",
            ...colors
        }
    },
    plugins: []
} satisfies Config;
