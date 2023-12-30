import { SVGProps } from "react";

export const CartLgIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.39321 8.93788V7.81393C9.39321 5.20684 11.6303 2.64609 14.4112 2.40276C15.1839 2.33159 15.9639 2.41288 16.701 2.64138C17.4382 2.86989 18.1162 3.24056 18.6913 3.72954C19.2664 4.21851 19.726 4.81496 20.0404 5.48049C20.3548 6.14602 20.5171 6.86589 20.5168 7.59377V9.19279M11.2471 25.5422H18.6629C23.6314 25.5422 24.5213 23.6766 24.7808 21.4056L25.7078 14.4533C26.0415 11.6261 25.1764 9.32025 19.8988 9.32025H10.0112C4.73366 9.32025 3.86849 11.6261 4.20219 14.4533L5.12916 21.4056C5.38871 23.6766 6.2786 25.5422 11.2471 25.5422Z"
                stroke="black"
                strokeWidth={props.strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
