import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="flex flex-col bg-teal-100 min-h-screen">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
