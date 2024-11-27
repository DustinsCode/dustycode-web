import {
    Center,
    Float,
    OrbitControls,
    Text3D,
    useFont,
    useMatcapTexture
} from "@react-three/drei";

export default function Scene() {
    const font = useFont("src/assets/Dosis_Regular.json");

    //FIXME: does not reflect light https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial
    const [matcap] = useMatcapTexture('B9CDD2_775339_958272_7F6A5E')

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
                        {/* <meshMatcapMaterial matcap={matcap} /> */}
                        <meshPhongMaterial />
                    </Text3D>
                </Float>
            <OrbitControls enablePan={false} enableZoom={false} />
        </Center>
    );
}
