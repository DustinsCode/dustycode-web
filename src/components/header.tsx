import clsx from "clsx";
import { NavLink, useLocation } from "react-router";

export default function Header() {
    return (
        <div className="w-full flex justify-center my-3 gap-3">
            <HeaderItem name="Home" route="/" />
            <HeaderItem name="About" route="/about" />
            <HeaderItem name="Contact" route="/contact" />
        </div>
    );
}

interface HeaderItemProps {
    name: string;
    route: string;
}

function HeaderItem({ name, route }: HeaderItemProps) {
    const location = useLocation();

    return (
        <div>
            <NavLink
                to={route}
                className={clsx(
                    location.pathname === route ? "bg-white bg-opacity-50" : "",
                    "rounded-2xl py-1 px-3 w-20 text-lg"
                )}
            >
                {name}
            </NavLink>
        </div>
    );
}
