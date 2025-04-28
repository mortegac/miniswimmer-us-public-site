import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Get to know our unique method in the market`,
	description: `Swimming Pool, Safety, Accidents, Prevention,, Guidance`,
	openGraph: {
		type: "website",
		title: `Conoce el método Miniswimmer`,
		description: `Nuestro método utiliza programación neurolingüística y coaching para que los niños tengan un aprendizaje real y significativo durante toda su vida.`,
		images:
			"https://images.prismic.io/minifit/f8907eeb-0b15-40b4-b02a-81d122754a11_SOCIAL-MEDIA.png",
	},
	twitter: {
		card: "summary_large_image",
		title: `Conoce el método Miniswimmer`,
		description: `Nuestro método utiliza programación neurolingüística y coaching para que los niños tengan un aprendizaje real y significativo durante toda su vida.`,
		images:
			"https://images.prismic.io/minifit/f8907eeb-0b15-40b4-b02a-81d122754a11_SOCIAL-MEDIA.png",
	},
};

export default function HomePage() {
	return (
		<main>
			<Home />
		</main>
	);
}
