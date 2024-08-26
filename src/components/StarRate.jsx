import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRate() {
    const [rating, setRating] = useState(null);
    const [rateColor, setColor] = useState(null);

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <>
                        <label className="bg-[#fff] p-1 rounded-lg">
                            <input 
                                className="hidden" 
                                type='radio' 
                                name='rate' 
                                value={currentRate}
                                onClick={() => setRating(currentRate)}
                            />
                            <FaStar 
                                size={28} 
                                color={currentRate <= (rateColor || rating) ? "#FCDB65" : "#E5E6F9"} 
                                onMouseEnter={() => setColor(currentRate)}
                                onMouseLeave={() => setColor(null)}
                            />
                        </label>
                    </>
                );
            })}
        </>
    );
}

export default StarRate;
