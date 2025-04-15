import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BoneColor from '../../../../assets/textures/BoneColor.jpg'

export default function BackWallWithSides() {
    const wallTexture = useLoader(THREE.TextureLoader, BoneColor)

    return (
        <group>
            {/* Pared de fondo */}
            <mesh position={[0, 2.5 / 2, -7]}>
                <boxGeometry args={[10, 2.5, 0.15]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>

            {/* Pared lateral izquierda */}
            <mesh position={[-5, 2.5 / 2, -3.5]}>
                <boxGeometry args={[0.15, 2.5, 7]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>

            {/* Pared lateral derecha */}
            <mesh position={[5, 2.5 / 2, -3.5]}>
                <boxGeometry args={[0.15, 2.5, 7]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>
        </group>
    )
}

