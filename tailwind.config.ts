import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				md: "3rem",
				lg: "4rem",
				xl: "7rem",
				"2xl": "12rem",
			},
			center: true
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"]
			},
			cursor: {
				goto: "url(../../public/new-tab.png), pointer"
			},
			colors: {
				primary: colors.amber
			},
			animation: {
				"slider-slow": "slider 15s linear infinite"
			},
			keyframes: {
				slider: {
					"0%": { transform: "translateX(calc(100% - 10px))" },
					"100%": { transform: "translateX(calc(-100% + 10px))" }
				}
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
};

export default config;
