import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import PilarTexture from '../../../../assets/textures/PilarTexture.jpg'

export default function FacadePillars() {
    const texture = useLoader(THREE.TextureLoader, PilarTexture)

    return (
        <group>
            {/* Pilar izquierdo */}
            <mesh position={[-1.5, 1.25, 0.3]}>
                <boxGeometry args={[0.3, 2.5, 0.75]} />
                <meshStandardMaterial map={texture} />
            </mesh>

            {/* Pilar derecho */}
            <mesh position={[1.5, 1.25, 0.3]}>
                <boxGeometry args={[0.3, 2.5, 0.75]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </group>
    )
}
