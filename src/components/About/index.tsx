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
import FeaturesWithImage from "../Common/FeaturesWithImage";
import Features from "../Common/Features";
import Testimonials from "../Common/Testimonials";
import Newsletter from "../Common/Newsletter";
import WhatsappContact from "../Common/WhatsappContact";
import Counter from "../Common/Counter";
import Blog from "../Common/Blog";

const PAGE:string = "aboutpage"
const AboutPage = () => {
	return (
		<>
			<Hero pageTraslation={PAGE} />
			<Counter pageTraslation={PAGE} />
			<Features pageTraslation={PAGE} />
			{/* <FeaturesWithImage pageTraslation={PAGE} /> */}
			{/* <WhatsappContact pageTraslation={PAGE} />
			<Testimonials pageTraslation={PAGE} /> */}
			{/* <Newsletter pageTraslation={PAGE}/>
			 */}
			 <Blog pageTraslation={PAGE}/>
		</>
	);
};

export default AboutPage;
