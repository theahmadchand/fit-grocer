import { SVGProps } from "react";

export const OrderIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.191 26.5011H6.17975C3.62133 26.5011 1.54492 24.5544 1.54492 22.1559V2.45787C1.54492 1.9828 1.96515 1.58884 2.47189 1.58884C2.97863 1.58884 3.39885 1.9828 3.39885 2.45787V22.1559C3.39885 23.5927 4.64717 24.763 6.17975 24.763H27.191C27.6977 24.763 28.118 25.157 28.118 25.632C28.118 26.1071 27.6977 26.5011 27.191 26.5011Z"
                fill="currentColor"
                stroke-width={props.strokeWidth}
            />
            <path
                d="M6.17978 20.7075C5.96967 20.7075 5.7472 20.638 5.57416 20.4989C5.38856 20.3476 5.27409 20.1338 5.25558 19.9039C5.23707 19.6739 5.31601 19.4464 5.47528 19.2707L11.1483 13.06C11.7663 12.388 12.6562 11.9824 13.5955 11.9477C14.5348 11.9245 15.4618 12.2489 16.1292 12.8746L17.3034 13.9754C17.6124 14.2651 18.0202 14.4041 18.4528 14.4041C18.8854 14.3925 19.2809 14.2072 19.5652 13.8943L25.2382 7.68363C25.5719 7.32443 26.1528 7.27808 26.5483 7.59093C26.9315 7.90378 26.9809 8.44837 26.6472 8.81916L20.9742 15.0298C20.3562 15.7019 19.4663 16.1074 18.527 16.1422C17.5876 16.1654 16.6607 15.8409 15.9933 15.2152L14.8315 14.1145C14.5225 13.8248 14.1146 13.6741 13.682 13.6857C13.2494 13.6973 12.8539 13.8827 12.5697 14.1956L6.89663 20.4062C6.80544 20.4997 6.69478 20.5747 6.57149 20.6265C6.4482 20.6783 6.31488 20.7059 6.17978 20.7075Z"
                stroke-width={props.strokeWidth}
                fill="currentColor"
            />
        </svg>
    );
};
