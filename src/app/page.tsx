import {
	NestJS,
	NextJS,
	Socials,
	TypeScript,
	MovingTechStack,
} from '@/app/components/ui/ui';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div>
				<Hero />
				<Experience />
			</div>
		</main>
	);
}

function Hero() {
	return (
		<div className="flex justify-between">
			<div className="prose prose-neutral dark:prose-invert">
				<h2>👋 Hello, I{"'"}m</h2>
				<h1 className="bg-gradient-to-tr bg-clip-text text-transparent from-primary-300 to-primary-400 head">
					Abdullah Binsaad
				</h1>
				<h4>Computer Scientist and Software Engineer</h4>
				<p>
					I build with the purpose of that whatever project I{"'"}m working on,
					weteher it was an individual or bussiness related, I aim to create
					value through making meaning in interactions, meetings, code, or any
					aspect of the software cycle.
				</p>
				<p>
					Nowadays, I mainly code in <TypeScript /> <NextJS /> and <NestJS />.
					But I'm also experienced in the following technologies:{' '}
					<MovingTechStack />
				</p>
				<div className="flex gap-3">
					<Resume />
					<ContactMe />
				</div>
			</div>
			<div>
				<Image
					src="/person.jpg"
					className="rounded-xl mb-3"
					width={300}
					height={300}
					alt="Profile Picture"
				/>
				<Socials />
			</div>
		</div>
	);
}

function Experience() {
	return (
		<section className="prose dark:prose-invert mt-12 max-w-full">
			<h1>💼 Experience</h1>
			<div className="rounded-2xl border dark:border-neutral-600/50 px-5">
				<ol className="list-none">
					<ExperienceItem
						imgSrc="hu.svg"
						title="B.Sc of Computer Science at Hadhramout University"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
				</ol>
			</div>
		</section>
	);
}

function Projects() {
	return (
		<section className="prose dark:prose-invert mt-12 max-w-full">
			<h1>🎨 Projects</h1>
			<div className="rounded-2xl border dark:border-neutral-600/50 px-5">
				<ol className="list-none">
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
					<ExperienceItem
						imgSrc="ts.svg"
						title="Software Engnineer at TypeScript"
						description="Led engineering team at TypeScript"
						years={[2024, 2024]}
					/>
				</ol>
			</div>
		</section>
	);
}

function ExperienceItem({
	imgSrc,
	title,
	description,
	years,
}: {
	imgSrc: string;
	title: string;
	description: string;
	years: [number, number];
}) {
	return (
		<li>
			<div className="flex gap-5 items-center">
				<div className="not-prose rounded-full flex justify-center items-center h-10 w-10 border shadow-sm dark:bg-neutral-800 dark:border-neutral-700/50 dark:shadow-neutral-800/50 dark:ring-0">
					<Image
						alt={`${title} Icon`}
						src={imgSrc}
						height={20}
						width={20}
						className="h-7 w-7"
					/>
				</div>
				<dl>
					<dt className="m-0">
						<h4 className="m-0">{title}</h4>
					</dt>
					<dd className="p-0">
						<p className="m-0 text-sm">{description}</p>
					</dd>
				</dl>
				<div className="ml-auto">
					<time dateTime={`${years[0]}`}>{years[0]}</time>
					<span className="mx-2">—</span>
					<time dateTime={`${years[1]}`}>
						{years[1] == new Date().getFullYear() ? 'Present' : years[1]}
					</time>
				</div>
			</div>
		</li>
	);
}

function ContactMe() {
	return (
		<button className="border rounded-sm border-neutral-500/30 shadow-sm px-5 py-1 hover:scale-105 transition-all duration-150">
			Contact Me
		</button>
	);
}

function Resume() {
	return (
		<button className="border rounded-sm border-neutral-500/30 shadow-sm px-5 py-1 cursor-goto hover:scale-105 transition-all duration-150">
			Resume
		</button>
	);
}
