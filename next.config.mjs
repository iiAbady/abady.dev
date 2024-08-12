import withMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	// experimental: {
	// 	mdxRs: true
	// }
};


export default withMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypeHighlight]
	}
})(nextConfig);
