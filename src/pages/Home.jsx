import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import SimpleButton from "../components/StyledHero";

const Home = () => {
    return(
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $200">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/> 
        <FeaturedRooms/>
        {/* <SimpleButton>hellos</SimpleButton> */}
        </>
    ) 
    
}

export default Home;