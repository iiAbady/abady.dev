import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'node:process';
import writeArticle from './base';


async function main() {
	const rl = createInterface({ input: stdin, output: stdout });
	const title = await rl.question("Title: ");
	const slug = title.toLowerCase().split(' ').join('-');
	const content = await rl.question("Content: ");


	writeArticle(slug, title, content, new Date(Date.now()).toISOString());

	console.log('Created the article successfully!');
	process.exit();
}


main();