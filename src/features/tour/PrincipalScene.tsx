import { Canvas } from '@react-three/fiber'
import HumanCamera from "../cameras/Camera.tsx";

const PrincipalScene = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Canvas de Three.js */}
            <Canvas className="w-full h-full">
                {/* Luz ambiental */}
                <ambientLight intensity={0.5} />
                {/* Luz direccional */}
                <directionalLight position={[10, 10, 5]} intensity={1} />

                {/* Suelo: un plano */}
                <mesh receiveShadow={true} position={[0, -2, 0]}>
                    <boxGeometry args={[20, 0.1, 20]} />
                    <meshStandardMaterial color="gray" />
                </mesh>

                {/* Un cubo encima del suelo */}
                <mesh position={[2, -1, 0]} rotation={[0, Math.PI / 4, 0]} scale={[2, 2, 2]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                </mesh>

                {/* Llamamos al componente de la cámara */}
                <HumanCamera/>
            </Canvas>
        </div>
    )

}

export default PrincipalScene