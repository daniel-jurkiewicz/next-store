import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "../components/Main";
import { Product } from "../components/Product";

const DATA = {
    header: "Lorem ipsum dolor",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quod dolore sit nobis sed ab totam, rem in nemo accusantium suscipit ad. Laboriosam magni non illo commodi, magnam neque vero.",
    imageUrl: "https://picsum.photos/id/10/2500/1667",
    imageAlt:
        "Vista with a line of trees in the foreground and a mountain range far off in the background.",
    rating: 4.5,
};

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <Product data={DATA} />
            </Main>
            <Footer />
        </div>
    );
};

export default Home;
