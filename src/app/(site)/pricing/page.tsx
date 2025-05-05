import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Learn about the Miniswimmer method",
	description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
	openGraph: {
		type: "website",
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images:
			"https://images.prismic.io/minifit/f8907eeb-0b15-40b4-b02a-81d122754a11_SOCIAL-MEDIA.png",
	},
	twitter: {
		card: "summary_large_image",
		title: `Learn about the Miniswimmer method`,
		description: `Our method uses neurolinguistic programming and coaching to ensure children experience real and meaningful learning throughout their lives.`,
		images:
			"https://images.prismic.io/minifit/f8907eeb-0b15-40b4-b02a-81d122754a11_SOCIAL-MEDIA.png",
	},
};

import Pricing from "@/components/Pricing";

export default function ContactPage() {
	return (
		<main>
			<Pricing />
		</main>
	);
}
