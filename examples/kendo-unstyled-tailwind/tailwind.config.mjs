/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [
		{
		  theme: {
			colors: {
			  base: '#d1d5db',
			  'base-hover': 'rgb(59 130 246 / 0.5);',
			  primary: '#4f46e5',
			  'primary-hover': '#6366f1',
			  'primary-text': '#ffffff',
			  selected: 'rgb(79, 70, 229)',
			  focused: '#e0f2fe',
			  'focused-text': '#0369a1',
			  surface: '#fafafa',
			  'surface-alt': '#ffffff',
			  'app-surface': '#424242',
			  subtle: '#666666',
			  'solid-border': 'rgba(0,0,0,0.08)',
			  error: 'red',
			  pink: '#ff49db',
			  subtitle: '#4b5563',
			  transparent: 'transparent',
			},
			extend: {
			  // Throws an error! Please check why.
			  fontFamily: {
				sans: ['Outfit', 'sans-serif'],
			  },
			},
		  },
		},
	],
	plugins: [
		require('@tailwindcss/forms')
	]
}
