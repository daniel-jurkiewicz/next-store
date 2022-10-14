import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <>
            <Header />
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-12 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                                    />
                                </picture>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                                    />
                                </picture>
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                                    />
                                </picture>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                                    />
                                </picture>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <picture>
                                    <img
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutPage;
