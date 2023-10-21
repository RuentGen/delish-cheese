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
        "semiDarkColor": "rgba(0, 0, 0, 0.90)",

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
    require("flowbite/plugin"),
    require("daisyui")
  ],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
export default config
