import { Canvas } from "@react-three/fiber";
import Scene from "../components/3d stuff/scene";

export default function Home() {
    return (
        <div className="flex flex-col xl:flex-row xl:justify-center justify-start items-center gap-3 h-full ">
            <div className="xl:my-auto xl:text-right xl:order-1 xl:mx-0 -mt-28 z-10 order-2 mx-5 max-w-sm">
                <div className="mb-3">
                    <h1 className="text-3xl">Hi, I'm Dustin!</h1>
                    <p>
                        A full stack software engineer based in Michigan.
                    </p>
                </div>
                <code className="bg-black bg-opacity-40 rounded p-2">npx dustycode</code>
            </div>
            <div className="xl:min-h-[50dvh] xl:w-1/3 lg:w-1/2 xl:m-0 xl:order-2 w-full -mt-32 h-[400px]  order-1">
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
    );
}
