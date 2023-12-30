import { Footer } from "../footer";
import { Header } from "../header";

export const Layout: FCC = (props) => {
    const { children } = props;

    return (
        <div className="relative flex min-h-screen flex-col justify-between">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    );
};
