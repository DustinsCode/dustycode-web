import {
    Center,
    Float,
    OrbitControls,
    Text3D,
    useFont
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import dosis from "../../assets/fonts/Dosis_Regular.json";
// import { FontLoader } from "three-stdlib";

export default function Scene() {
    const font = useFont("/Dosis_Regular.json");
    // const font = new FontLoader().parse(dosis);

    // using w / 6 for the size property of the Text3D isn't a perfect solution,
    // as it's not completely responsive with page resizing, as the text will
    // not re-center until a page refresh, but it's good enough for now
    const { width: w } = useThree((state) => state.viewport);

    return (
        <Center rotation={[-0.5, -0.25, 0]}>
            <Float rotationIntensity={2}>
                <Text3D
                    font={font.data}
                    size={w / 6}
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
