import {
    Center,
    Float,
    OrbitControls,
    Text3D,
    useFont
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Scene() {
    const font = useFont("src/assets/fonts/Dosis_Regular.json");
    const { size, camera, scene } = useThree();

    useEffect(() => {
        // TODO: make it auto resize on screen resize
        // camera.zoom = size.width > 1024 || size.width < 768 ? 100 : 50
        camera.updateProjectionMatrix();
        scene.updateMatrixWorld();
    }, [size, camera]);

    return (
        <Center rotation={[-0.5, -0.25, 0]}>
            <Float rotationIntensity={2}>
                <Text3D
                    font={font.data}
                    size={window.innerWidth < 700 ? 0.5 : 1.0}
                    curveSegments={32}
                    bevelEnabled
                    bevelSize={0.03}
                    bevelThickness={0.1}
                    height={0.5}
                    lineHeight={0.5}
                    letterSpacing={-0.06}
                >
                    {"dustycode"}
                    <meshPhongMaterial />
                </Text3D>
            </Float>
            <OrbitControls enablePan={false} enableZoom={false} />
        </Center>
    );
}
