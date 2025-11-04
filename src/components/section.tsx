import { useIntersectionObserver } from "@uidotdev/usehooks";
import { ReactNode, useEffect } from "react";
import { useNavStore } from "../store/store";

interface SectionProps {
    children?: ReactNode;
    name: string;
    id?: string;
    className?: string
}

export default function Section({ children, name, id, className }: SectionProps) {
    const setActive = useNavStore((state) => state.setActive);

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.5,
        root: null,
        rootMargin: "-20% 0% -20% 0%"
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            setActive(name);
        }
    }, [entry?.isIntersecting, name, setActive]);

    return <section ref={ref} id={id} className={className}>{children}</section>;
}
