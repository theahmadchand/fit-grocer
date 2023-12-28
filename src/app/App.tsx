import { CardList } from "@fit-grocer/ui";
import type { Product } from "@fit-grocer/ui";

export default function App() {
    const products: Product[] = [
        {
            id: 1,
            name: "Earthen Bottle",
            href: "#",
            price: 48,
            imageSrc: "src/assets/Image-1.png",
            imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
            id: 2,
            name: "Nomad Tumbler",
            href: "#",
            price: 35,
            imageSrc: "src/assets/Image-2.png",
            imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
            id: 3,
            name: "Focus Paper Refill",
            href: "#",
            price: 89,
            imageSrc: "src/assets/Image-3.png",
            imageAlt: "Person using a pen to cross a task off a productivity paper card.",
        },
        {
            id: 4,
            name: "Machined Mechanical Pencil",
            href: "#",
            price: 35,
            imageSrc: "src/assets/Image-4.png",
            imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
        },
    ];

    return (
        <div className="bg-slate-600 h-lvh">
            <CardList products={products} />
        </div>
    );
}
