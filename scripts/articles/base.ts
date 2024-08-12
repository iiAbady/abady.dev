import siteConfig from "@/config/site.config";
import { readEstimateInMinutes, truncateText } from "@/lib/util";
import { mkdir, writeFile } from "fs/promises";

export default async function writeArticle(slug: string, title: string, content: string, date: string) {
	const brief = content.split('\n').filter(c => !c.startsWith("#") && c.length > 150)[0];
	try {
		await mkdir(`./src/app/blog/${slug}`);
		await writeFile(`./src/app/blog/${slug}/page.mdx`, `
import MdxLayout from '@/components/MdxLayout';
		
export const metadata = { 
	"title": "${title}", 
	"brief": "${truncateText(brief, 200)}",
	"readtime": "${readEstimateInMinutes(content.split(" ").length)}",
	"publishDate": "${new Date(date ?? Date.now()).toISOString()}",
	 "openGraph": {
		"title": "${siteConfig.title} | ${title}",
		"description": "${truncateText(brief, 100)}",
	},
	"twitter": {
		"title": "${siteConfig.title} | ${title}",
		"description": "${truncateText(brief, 100)}",
	}
}

# ${title}
${content}

export default function MDXPage({ children }) {
	return <MdxLayout metadata={metadata}> {children} </MdxLayout>
}
`, {

		})
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		} else if (typeof error == "string") {
			console.error(error);
		}
	}
}