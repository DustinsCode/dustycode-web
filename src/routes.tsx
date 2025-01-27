import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./routes/home";
import Marby from "./routes/marby";

export default function RouteConfig() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="marby" element={<Marby />} />
            </Routes>
        </BrowserRouter>
    )
}