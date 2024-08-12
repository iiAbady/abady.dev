import { MetadataRoute } from 'next'
import siteConfig from '@/config/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${siteConfig.author.url}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	]
}