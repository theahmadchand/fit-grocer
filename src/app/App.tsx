import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Product } from "./product";
import { ScrollToTop } from "@fit-grocer/utils";
import { Cart } from "./cart";
import { Wishlist } from "./wishlist";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <ScrollToTop />
        </>
    );
}
