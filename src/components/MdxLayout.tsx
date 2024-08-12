import { formatDate } from "@/lib/util";
import { BlogMetadata } from "@/types";

export default function MdxLayout({ metadata, children }: { metadata: BlogMetadata, children: React.ReactNode }) {
	return <article className="prose dark:prose-invert max-w-max">
		<p className="text-sm text-neutral-500">{formatDate(new Date(metadata.publishDate))} <span className="mx-3">{"//"}</span> {metadata.readtime}</p>
		{children}
	</article>
}
