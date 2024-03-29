import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-greycliff)']
      },
      variants: {
        extend: {
          display: ['responsive'],
          textColor: ['hover'],
        },
      },
    },
    colors: {
      nutty: '#dba76c',
      darkJelly: '#640223',
      midnightGreen: '#05393c',
      bread: '#fff7e1',
      light: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
}
export default config
