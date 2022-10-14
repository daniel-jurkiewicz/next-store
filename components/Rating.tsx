interface RatingProps {
    rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
    return <span className="text-sm font-bold">Rating: {rating}</span>;
};
