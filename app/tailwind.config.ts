import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{tsx,ts,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {pattern: /bg-./},
    {pattern: /text-./},
    {pattern: /border-./, variants: ['hover']},
  ]
}
export default config
