import {
	NestJS,
	NextJS,
	Socials,
	TypeScript,
	MovingTechStack,
} from '@/components/ui';
import { CircleArrowRight } from 'lucide-react';
import { truncateText, formatDate } from "@/lib/util";
import Image from 'next/image';
import { readdir } from 'node:fs/promises';
import { Post } from '@/types';
import Link from 'next/link';
import projects from '@/config/projects.config';
import siteConfig from '@/config/site.config';


export default async function Home() {
	const posts = await getPosts();
	return (
		<main>
			<div className='space-y-52'>
				<Hero />
				<Experience />
				<Projects />
				<Blog posts={posts} />
			</div>
		</main>
	);
}

function Hero() {
	return (
		<section className="flex flex-col md:flex-row items-center md:justify-between md:items-stretch pt-2" id="#about">
			<div className="prose prose-neutral dark:prose-invert order-2 md:order-1">
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
					But I{"'"}m also experienced in the following technologies:{' '}
					<MovingTechStack />
				</p>
				<div className="flex gap-3">
					<Resume />
					<ContactMe />
				</div>
			</div>
			<div className='order-1 md:order-2 pb-5 md:pb-0'>
				<Image
					src="/person.jpg"
					className="rounded-xl mb-3"
					width={300}
					height={300}
					alt="Profile Picture"
				/>
				<Socials />
			</div>
		</section>
	);
}

function Experience() {
	return (
		<section className="prose dark:prose-invert mt-12 max-w-full pt-2" id="experience">
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
		<section className="prose dark:prose-invert mt-12 max-w-full pt-2" id="projects">
			<h1>🎨 Projects</h1>
			<div className="flex gap-4">
				{projects.map((project, index) => {
					return <ProjectItem
						imgSrc={project.image}
						title={project.title}
						key={index}
						description={project.description}
						link={project.link}
						tech={project.tech.map((Tech, index) => <Tech key={index} />)}
					/>
				})}
			</div>
		</section>
	);
}

function Blog({ posts }: { posts: Post[] }) {
	return (
		<section className="prose dark:prose-invert mt-12 max-w-full pt-2" id="blog">
			<h1>✨ Blog</h1>
			{posts.map((post, index) =>
				<BlogItem key={index} content={post.brief} title={post.title} dateTime={new Date(post.publishDate)} readEstimate={post.readtime} fullLink={`/blog/${post.slug}`} />
			)}
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
				<div className="not-prose rounded-full flex justify-center items-center md:h-10 md:w-10 h-15 w-15 border shadow-sm dark:bg-neutral-800 dark:border-neutral-700/50 dark:shadow-neutral-800/50 dark:ring-0">
					<Image
						alt={`${title} Icon`}
						src={imgSrc}
						height={200}
						width={200}
						className="md:h-7 md:w-7 h-13 w-13"
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

function ProjectItem({
	imgSrc,
	title,
	description,
	link,
	tech,
}: {
	imgSrc: string;
	title: string;
	description: string;
	link?: string;
	tech: React.ReactElement[];
}) {
	return (
		<div className="flex flex-col gap-3 rounded-2xl border dark:border-neutral-600/50 py-5 px-4">
			<div className="flex gap-4 items-center">
				<div className="not-prose rounded-full flex justify-center items-center h-10 w-10 border shadow-sm dark:bg-neutral-800 dark:border-neutral-700/50 dark:shadow-neutral-800/50 dark:ring-0">
					<Image
						alt={`${title} Icon`}
						src={imgSrc}
						height={200}
						width={200}
						className="h-6 w-6"
					/>
				</div>
				<h4 className="m-0">{title}</h4>
			</div>
			<p>{description}</p>
			<div className="flex gap-3 justify-between items-center">
				<div className="flex max-w-96 gap-3 flex-wrap grayscale hover:grayscale-0">
					{...tech}
				</div>
				{link && <Link href={link}>
					<CircleArrowRight />
				</Link>}
			</div>
		</div>
	);
}

function BlogItem({
	dateTime,
	title,
	content,
	fullLink,
	readEstimate
}: {
	dateTime: Date;
	title: string;
	content: string;
	fullLink: string;
	readEstimate: string
}) {
	return (
		<article className="prose flex flex-col dark:prose-invert">
			<div className="text-xs text-neutral-500">
				<time>{formatDate(dateTime)}</time>
				<span className='mx-3'>{"//"}</span>
				<span>~{readEstimate}</span>
			</div>
			<Link href={fullLink} className='no-underline'><h2 className='mt-1 mb-2'>{title}</h2></Link>
			<p className='mt-0 mb-2'>{truncateText(content, 200)}</p>
			<Link href={fullLink} className='text-blue-500 no-underline hover:underline'>Continue Reading</Link>
		</article>
	);
}

function ContactMe() {
	return (
		<a href={siteConfig.links.mail}><button className="border rounded-sm border-neutral-500/30 shadow-sm px-5 py-1 hover:scale-105 transition-all duration-150">
			Contact Me
		</button></a>
	);
}

function Resume() {
	return (
		<a href='/resume.pdf'><button className="border rounded-sm border-neutral-500/30 shadow-sm px-5 py-1 cursor-goto hover:scale-105 transition-all duration-150">
			Resume
		</button></a>
	);
}

async function getPosts(): Promise<Post[]> {
	const slugs = (await (readdir("./src/app/blog", { withFileTypes: true }))).filter(d => d.isDirectory());
	const posts = await Promise.all(
		slugs.map(async ({ name }) => {
			const { metadata } = await import(`./blog/${name}/page.mdx`);
			return { slug: name, ...metadata };
		}));

	posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

	return posts;
}