import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{html,ts,tsx,js,jsx}',
    './public/**/*.{html,ts,tsx,js,jsx}',
    './out/**/*.{html,ts,tsx,js,jsx}',
  ],
  theme: {},
  plugins: [],
}
export default config
