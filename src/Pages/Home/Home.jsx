import Blogs from "../../components/Blogs";
import ContactUs from "../../components/ContactUs";
import Reviews from "../../components/Reviews";

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <Blogs></Blogs>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;