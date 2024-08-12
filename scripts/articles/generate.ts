import { CONTENT_PATH, NON_ALPHANUMERIC_REGEX } from "@/constants";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import writeArticle from "./base";


async function main(pathToContent?: string) {
	console.log(pathToContent);
	console.log("\x1b[32mReading your content directory... \x1b[0m");
	const paths = await readdir(pathToContent ?? CONTENT_PATH);
	console.log("\x1b[32mGenerating the mdx representation of your articles... \x1b[0m");
	for (const path of paths) {
		const file = await readFile(join(CONTENT_PATH, path), "utf-8");
		let [title, ...restOfTheContent] = file.split('\n');
		const content = restOfTheContent.join("\n");
		title = title.replace(
			NON_ALPHANUMERIC_REGEX,
			""
		).trim();
		const slug = title.split(" ").join("-").toLowerCase();
		writeArticle(slug, title, content, new Date(Date.now()).toISOString());
	}
	console.log("\x1b[32mFinished...\x1b[0m");
}

main(process.argv[2]);