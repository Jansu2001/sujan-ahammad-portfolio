import Banner from "../Banner/Banner";
import Contact from "../ContactMe/Contact";
import RecentProjects from "../RecentProjects/RecentProjects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentProjects></RecentProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;