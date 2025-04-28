import Hero from "../Common/Hero";
import FeaturesWithImage from "../Common/FeaturesWithImage";
import Testimonials from "../Common/Testimonials";

import Newsletter from "./Newsletter";

const Home = () => {
	return (
		<>
			<Hero />
			<FeaturesWithImage />
			<Testimonials />
			<Newsletter />
		</>
	);
};

export default Home;
