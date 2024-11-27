import { Canvas } from "@react-three/fiber";
import Scene from "../components/3d stuff/scene";

export default function Home() {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            <div className="my-auto lg:text-right lg:order-1 lg:mx-0 order-2 mx-5 max-w-sm">
                <h1 className="text-3xl">Hi, I'm Dustin!</h1>
                <p>
                    A full stack software engineer, musician, and nature
                    enjoyer.
                </p>
                <code>npx dustycode</code>
            </div>
            <div className="lg:min-h-[50dvh] lg:w-1/3 w-full lg:order-2 order-1">
                <Canvas
                    orthographic
                    camera={{ position: [0, 0, 100], zoom: 100 }}
                >
                    {/* <color attach={'background'} args={['black']} />
                    <AsciiRenderer
                        fgColor="black"
                        bgColor="transparent"
                        invert={true}
                        resolution={0.3}
                    /> */}
                    <ambientLight intensity={0.5} color={"#dc2eff"} />
                    <directionalLight
                        position={[10, 10, 10]}
                        color={"#36aeff"}
                    />
                    <Scene />
                </Canvas>
            </div>
        </div>
    );
}
