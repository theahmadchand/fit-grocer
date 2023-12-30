import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Product } from "./product";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
        </Routes>
    );
}
