import { Canvas } from "@react-three/fiber";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";
import Scene from "../components/3d stuff/scene";
import About from "../components/about";
import Contact from "../components/contact";
import { useNavStore } from "../store/store";
import Section from "../components/section";

export default function Home() {
    const setActive = useNavStore((state) => state.setActive);
    const [ref, entry] = useIntersectionObserver({
        threshold: 1,
        root: null,
        rootMargin: "50%"
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            setActive("Home");
        }
    });

    return (
        <div className="max-w-dvw">
            <div
                id="home"
                ref={ref}
                className="flex flex-col xl:flex-row xl:justify-center justify-start items-center gap-3 h-dvh mb-4"
            >
                <div className="xl:my-auto xl:text-right xl:order-1 xl:mx-0 -mt-28 z-10 order-2 mx-5 max-w-sm">
                    <div className="mb-3">
                        <h1 className="text-3xl">Hi, I'm Dustin!</h1>
                        <p>A full stack software engineer based in Michigan.</p>
                    </div>
                    <code className="bg-black bg-opacity-40 rounded p-2">
                        npx dustycode
                    </code>
                </div>
                <div className="xl:min-h-[50dvh] xl:w-1/3 md:w-1/2 xl:m-0 xl:order-2 w-full h-[400px] order-1">
                    <Canvas
                        orthographic
                        camera={{ position: [0, 0, 100], zoom: 100 }}
                    >
                        <ambientLight intensity={0.5} color={"#9C8AA8"} />
                        <directionalLight
                            position={[10, 10, 10]}
                            color={"#f487fa"}
                        />
                        <Scene />
                    </Canvas>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <Section id="about" name="About">
                    <About />
                </Section>
                <Section id="contact" name="Contact" >
                    <Contact />
                </Section>
            </div>
        </div>
    );
}
