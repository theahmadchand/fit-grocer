import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, WishlistProvider } from "@fit-grocer/utils";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <BrowserRouter>
            <CartProvider>
                <WishlistProvider>
                    <App />
                </WishlistProvider>
            </CartProvider>
        </BrowserRouter>
    </StrictMode>
);
