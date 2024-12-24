import { Outlet } from "react-router";
import Header from "./components/header";

function App() {
    return (
        <div className="h-full">
            <Header />
            <div className="mt-[52px]">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
