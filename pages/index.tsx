import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const DATA = {
    header: "Lorem ipsum dolor",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quod dolore sit nobis sed ab totam, rem in nemo accusantium suscipit ad. Laboriosam magni non illo commodi, magnam neque vero.",
    imageUrl: "https://picsum.photos/id/10/2500/1667",
    imageAlt:
        "Vista with a line of trees in the foreground and a mountain range far off in the background.",
    rating: 4.5,
};

interface RatingProps {
    rating: number;
}

const Rating = ({ rating }: RatingProps) => {
    return <span className="text-sm font-bold">Rating: {rating}</span>;
};

interface ProductProps {
    data: {
        header: string;
        description: string;
        imageUrl: string;
        imageAlt: string;
        rating: number;
    };
}

const Product = ({ data }: ProductProps) => {
    return (
        <>
            <img src={data.imageUrl} alt={data.imageAlt} />
            <div>
                <h1 className="text-xl uppercase mb-2">{data.header}</h1>
                <p className="mb-2">{data.description}</p>
                <Rating rating={data.rating} />
            </div>
        </>
    );
};

const Home = () => {
    return (
        <div className="flex flex-col bg-teal-100 min-h-screen">
            <Header />
            <main className="flex-grow content-start max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
                <Product data={DATA} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
