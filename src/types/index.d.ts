export interface Post {
	slug: string;
	title: string;
	publishDate: string;
	brief: string;
	"readtime": string;
}

export interface BlogMetadata { 
	title: string,
	brief: string,
	readtime: string,
	publishDate: string,
	openGraph: {
		title: string,
		description: string
	},
	twitter: {
		title: string,
		description: string
	}
}