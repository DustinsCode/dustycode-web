import { useWindowScroll } from "@uidotdev/usehooks";
import clsx from "clsx";
import { motion } from "motion/react";
import { useNavStore } from "../store/store";

export default function Header() {
    const [{ y }] = useWindowScroll();

    return (
        <nav className="sticky top-0 z-10 flex justify-center">
            <div className="w-min">
                <ul
                    className={clsx(
                        y && y > 80 ? "bg-slate-500/90 transition-opacity" : "",
                        "flex justify-center my-3 gap-3 rounded-lg ease-in-out p-2"
                    )}
                >
                    <HeaderItem name="Home" route="#home" />
                    <HeaderItem name="About" route="#about" />
                    <HeaderItem name="Contact" route="#contact" />
                </ul>
            </div>
        </nav>
    );
}

interface HeaderItemProps {
    name: string;
    route: string;
}

function HeaderItem({ name, route }: HeaderItemProps) {
    const active = useNavStore((state) => state.active);

    return (
        <motion.li className="grid">
            {active === name ? (
                <motion.div
                    layoutId="nav-bg"
                    className="rounded-2xl py-1 px-3 bg-white/30 h-10 col-start-1 row-start-1"
                />
            ) : null}
            <a
                href={route}
                className={clsx(
                    "rounded-2xl py-1 px-3 text-lg col-start-1 row-start-1"
                )}
            >
                {name}
            </a>
        </motion.li>
    );
}
