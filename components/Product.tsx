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
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <picture>
                        <img
                            className="rounded-t-lg"
                            src={data.imageUrl}
                            alt={data.imageAlt}
                        />
                    </picture>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            {data.header}
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                            {data.description}
                        </p>
                        <p className="text-gray-600 font-bold text-sm">
                            Rating: {data.rating}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
