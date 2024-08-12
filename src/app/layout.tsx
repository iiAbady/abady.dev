import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import NextProgress from 'nextjs-toploader';
import Footer from "@/components/Footer";
import siteConfig from "@/config/site.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: {
		name: siteConfig.author.name,
		url: siteConfig.author.url
	},
	icons: {
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png"
	},
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.author.url,
		siteName: siteConfig.title,
		images: {
			url: siteConfig.ogImage,
			height: 640,
			width: 640,
			alt: "Abdullah's Personal Photo"
		},
		type: "website",
		locale: "en_US"
	},
	twitter: {
		card: "summary_large_image",
		site: siteConfig.author.url,
		title: siteConfig.title,
		description: siteConfig.description,
		images: {
			url: siteConfig.ogImage,
			width: 1800,
			height: 1000,
			alt: "Abdullah's Personal Photo",
		},
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} transition-colors`}>
				<Analytics />
				<SpeedInsights />
				<NextProgress color="#fcd34d" speed={500} crawlSpeed={500} />
				<div className="flex min-h-screen flex-col gap-6 antialiased container py-2">
					<ThemeProvider attribute="class">
						<Navbar />
						{children}
					</ThemeProvider>
					<hr className="dark:border-neutral-600/50" />
					<Footer />
				</div>
			</body>
		</html>
	);
}
