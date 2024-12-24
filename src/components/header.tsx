import clsx from "clsx";
import { motion } from "motion/react";
import { NavLink, useLocation } from "react-router";

export default function Header() {
    return (
        <nav className="w-full sticky top-0 z-10 p-3">
            <ul className="flex justify-center my-3 gap-3">
                <HeaderItem name="Home" route="/" />
                <HeaderItem name="About" route="/about" />
                <HeaderItem name="Contact" route="/contact" />
            </ul>
        </nav>
    );
}

interface HeaderItemProps {
    name: string;
    route: string;
}

function HeaderItem({ name, route }: HeaderItemProps) {
    const location = useLocation();

    return (
        <motion.li className="grid">
            {location.pathname === route ? (
                <motion.div
                    layoutId="nav-bg"
                    className="rounded-2xl py-1 px-3 bg-white/30 h-10 col-start-1 row-start-1"
                />
            ) : null}
            <NavLink
                to={route}
                className={clsx(
                    "rounded-2xl py-1 px-3 text-lg col-start-1 row-start-1"
                )}
            >
                {name}
            </NavLink>
        </motion.li>
    );
}
