import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./home";
import { Product } from "./product";
import { ScrollToTop } from "@fit-grocer/utils";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:productId" element={<Product />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <ScrollToTop />
        </>
    );
}
