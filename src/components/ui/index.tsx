import siteConfig from "@/config/site.config";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const iconSVGs = {
	typescript: <svg key={1} className="mr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><title>file_type_typescript_official</title><rect x="2" y="2" width="28" height="28" rx="1.312" style={{ fill: "#3178c6" }} /><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" style={{ fill: "#ffffff", fillRule: "evenodd" }} /></svg>,
	nextjs: <svg xmlns="http://www.w3.org/2000/svg" key={2} className="mr-1" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"></path></g></svg>,
	nestjs: <svg className="mr-1" height={15} width={15} key={3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_nestjs</title><path d="M18.487,2a1.781,1.781,0,0,0-.564.1c1.615,1.062-.29,2.6.6,3.9A2.235,2.235,0,0,1,19.6,3.765c.285-.237.468-.322.407-.714C19.908,2.409,19.052,2,18.487,2Zm2.3.414c-.223,1.123-.5,1.164-1.323,1.887a1.821,1.821,0,0,0-.527,2.191c-3.4-1.32-7.758-2.118-10.953.166-1.149.821-1.85,2-3.267,2.481-.916.314-1.816.221-2.39,1.129A1.413,1.413,0,0,0,2.383,12.1c.171.175.5.287.636.465.079.1.077.2.152.333a2.6,2.6,0,0,0,.564.828c.147.121.652.239.738.368.108.161-.172.8.063.9.158.073.621-.744.666-.816-.092.643-.213,1.784.51.834.343-.451.364-.6.941-.7a8.2,8.2,0,0,1,1.117-.116,8.362,8.362,0,0,1,8.622,7.622c-.108-.5-.761-1.3-1.369-1.11-.259.08-.355.527-.525.786a3.773,3.773,0,0,1-.785.868,4.687,4.687,0,0,0-.072-1.452c-.182.748-.547,1.989-1.466,1.788a1.652,1.652,0,0,1-1.328-1.142c-.119-.76.684-1.651-.607-1.714-2.59-.127-1.991,3.682-.462,4.675a3.272,3.272,0,0,0-1.015.283,6.893,6.893,0,0,0,10.276-4.922,7.058,7.058,0,0,1-.015,3.085,7.213,7.213,0,0,1-.554,1.559,6.781,6.781,0,0,1-1.3,1.81c-.314.311-.89.624-1.088.941a13.409,13.409,0,0,0,3.52-.968A11.638,11.638,0,0,1,15.1,30a11.589,11.589,0,0,0,9.3-5.909,11.657,11.657,0,0,1-1.945,4.668,11.531,11.531,0,0,0,4.975-7.783,11.622,11.622,0,0,1,.209,3.5A12.418,12.418,0,0,0,29.528,13.91a15.755,15.755,0,0,0-1.689-3.962A14.838,14.838,0,0,0,26.9,8.554c-.133-.173-.844-.806-.844-1q-.009.029-.015,0c0,3.248-3.5,5.333-6.431,4.463A5,5,0,0,0,24.156,7.85,5,5,0,0,0,20.787,2.414Z" style={{ fill: "#ea2845", fillRule: "evenodd" }} /></svg>,
	expressjs: <svg xmlns="http://www.w3.org/2000/svg" key={4} className="mr-1" viewBox="0 0 32 32" width="15" height="15"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>,
	laravel: <svg xmlns="http://www.w3.org/2000/svg" key={5} className="mr-1" height="15" viewBox="0 -.11376601 49.74245785 51.31690859" width="15"><path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20" /></svg>
}

export function Socials() {
	return <div className="justify-center flex gap-4">
		<a href={siteConfig.links.x} target="_blank"><Twitter className="hover:stroke-primary-300 cursor-goto" /></a>
		<a href={siteConfig.links.linkedIn} target="_blank"><Linkedin className="hover:stroke-primary-300 cursor-goto" /></a>
		<a href={siteConfig.links.github} target="_blank"><Github className="hover:stroke-primary-300 cursor-goto" /></a>
		<a href={siteConfig.links.mail}><Mail className="hover:stroke-primary-300 cursor-goto" /></a>
	</div>
}

function TechItem({ children }: { children: React.ReactNode }) {
	return <span className="rounded border-neutral-600/50 shadow-sm not-prose">
		<a className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
			{children}
		</a>
	</span>
}

export function MovingTechStack() {
	return <span className="rounded border-neutral-600/50 shadow-sm not-prose">
		<a className="overflow-hidden inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
			<span className="[mask-image:linear-gradient(to_left,transparent_5%,black_20%,black_80%,transparent_95%)]">
				<span className="inline-flex animate-slider-slow hover:[animation-play-state:paused]">
					{Object.values(iconSVGs)}
				</span>
			</span>
		</a>
	</span>
}

export function TypeScript() {
	return <TechItem>
		{iconSVGs.typescript}
		Typescript
	</TechItem>
}

export function NextJS() {
	return <TechItem>
		{iconSVGs.nextjs}
		Next.js
	</TechItem >
}

export function NestJS() {
	return <TechItem>
		{iconSVGs.nestjs}
		Nest.js
	</TechItem>
}

export function ExpressJS() {
	return <TechItem>
		{iconSVGs.expressjs}
		Express.JS
	</TechItem>
}

export function Laravel() {
	return <TechItem>
		{iconSVGs.laravel}
		Laravel
	</TechItem>
}