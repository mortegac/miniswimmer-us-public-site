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


import Hero from "../Common/Hero";
import Html from "../Common/Html";

const PAGE:string = "privacypolicypage"
const Home = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			<Html pageTraslation={PAGE} />
			{/* <Counter pageTraslation={PAGE} />
			<WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} /> */}
			{/* <Newsletter pageTraslation={PAGE}/>
			<Blog pageTraslation={PAGE}/> */}
		</>
	);
};

export default Home;
