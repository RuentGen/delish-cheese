import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "backgroundWhite": "#FFFFFF",
        "colorPrimary": "#C10B00",
        "colorSecondary": "#F2BD26",
        "colorLightDark": "#8D8D99",
        "colorDark": "#02a189",

        'borderDark': '#d5d5d5',
        //Heading Color
        "primaryTextColor": "#6C4143",
        "secondaryTextColor": "#56423E"
      },
      screens: {
        'sm': '880px',
        // => @media (min-width: 850px) { ... }

        'md': '881px',
        // => @media (min-width: 851px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        '1': '0',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
