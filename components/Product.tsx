import { Rating } from "./Rating";

interface ProductProps {
    data: {
        header: string;
        description: string;
        imageUrl: string;
        imageAlt: string;
        rating: number;
    };
}

export const Product = ({ data }: ProductProps) => {
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
