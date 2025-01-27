import { Outlet } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header />
            <div className="h-full -mt-[88px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
