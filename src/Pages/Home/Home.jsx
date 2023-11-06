import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import ContactUs from "../../components/ContactUs";
import PopularServices from "../../components/PopularServices";
import Reviews from "../../components/Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel Tandem | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;