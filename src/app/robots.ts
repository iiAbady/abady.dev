import { MetadataRoute } from 'next'
import siteConfig from '@/config/site.config'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${siteConfig.author.url}/sitemap.xml`,
	}
}