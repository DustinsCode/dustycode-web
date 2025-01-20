import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Home from "./routes/home";
import About from "./routes/about";
import { Contact } from "./routes/contact";
import Marby from "./routes/marby";

export default function RouteConfig() {

    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="marby" element={<Marby />} />
            </Routes>
        </BrowserRouter>
    )
}