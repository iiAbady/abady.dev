"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navigation = [
	{
		text: "About",
		link: "#"
	},
	{
		text: "Experience",
		link: "#"
	},
	{
		text: "Projects",
		link: "#"
	},
	{
		text: "Blog",
		link: "#"
	}
]

export default function Navbar() {

	return (
		<section className="sticky top-1">
			<div className="flex container p-8 justify-center items-center">
				<nav className="divide-x divide-neutral-500 flex px-6 h-12 gap-x-5 items-center rounded-full text-neutral-800 dark:text-neutral-200 border border-neutral-400/50 dark:border-neutral-600/50 backdrop-blur-lg text-sm">
					<div className="flex gap-4">
						{
							navigation.map((nav, index) => {
								return <NavItem key={index} text={nav.text} link={nav.link} />
							})
						}
					</div>
						<ToggleThemeButton />
				</nav>
			</div>
		</section>
	);
}


function NavItem({ text, link }: { text: string, link: string }) {
	return <a href={link} className="transition-colors duration-300 hover:text-primary-400">
		{text}
	</a>
}

function ToggleThemeButton() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return <button aria-label="Toggle Theme" className="transition-all duration-300 ps-5" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
		{
			theme == "dark" ?
				<Sun />
				:
				<Moon />
		}
	</button>
}