import { AVG_WORD_PER_SECOND } from "@/constants";

export function readEstimateInMinutes(lengthOfText: number): string {
	return `${Math.ceil(lengthOfText / AVG_WORD_PER_SECOND)} min read`;
}

export function truncateText(text: string, limit: number): string {
	return `${text.slice(0, limit - 4)} ${text.length > limit ? "..." : ""}`;
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'short',
		day: "2-digit"
	});
}