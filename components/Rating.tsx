interface RatingProps {
    rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
    return (
        <span className="text-gray-600 font-bold text-sm">
            Rating: {rating}
        </span>
    );
};
