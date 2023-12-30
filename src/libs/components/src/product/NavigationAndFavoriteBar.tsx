import { HeartIcon, LeftArrowIcon } from "@fit-grocer/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavigationAndFavoriteBar = () => {
    const [isFavourite, setIsfavourite] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between">
            <LeftArrowIcon className="cursor-pointer" onClick={() => navigate("..")} width="2.5rem" height="2.5rem" />
            <HeartIcon
                className="cursor-pointer"
                onClick={() => setIsfavourite((previous) => !previous)}
                width="2rem"
                height="2rem"
                strokeWidth="1.5"
                fill={isFavourite ? "var(--color-orange)" : "none"}
                stroke={isFavourite ? "var(--color-orange)" : "black"}
            />
        </div>
    );
};
