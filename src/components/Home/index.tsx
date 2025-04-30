import Hero from "../Common/Hero";
import FeaturesWithImage from "../Common/FeaturesWithImage";
import Testimonials from "../Common/Testimonials";

import Newsletter from "./Newsletter";

const Home = () => {
	return (
		<>
			<Hero pageTraslation="homepage" />
			<FeaturesWithImage pageTraslation="homepage" />
			<Testimonials pageTraslation="homepage" />
			<Newsletter pageTraslation="homepage"/>
		</>
	);
};

export default Home;
