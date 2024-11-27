import { Outlet } from "react-router";
import Header from "./components/header";

function App() {
    return (
        <div className="h-full">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
