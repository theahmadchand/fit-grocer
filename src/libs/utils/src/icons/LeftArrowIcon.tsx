import { SVGProps } from "react";

export const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
            <path
                d="M15.95 9.8833L5.83337 20L15.95 30.1166M34.1667 20H6.11671"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
