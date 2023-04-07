/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	 "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: '#2A524C',
			secondary: '#F2C94C',
			black: '#323232',
			white: '#ffffff',
			button_hover: '#EDC038;'

		}
	},
  },
  plugins: [],
}

