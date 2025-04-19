import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import PilarTexture from '../../../../../assets/textures/PilarTexture.jpg'
import { RigidBody } from '@react-three/rapier'

export default function FacadePillars() {
    const texture = useLoader(THREE.TextureLoader, PilarTexture)

    return (
        <group>

            {/* Pilar izquierdo */}
            <RigidBody type="fixed" colliders="cuboid">
                <mesh position={[-2, 1.5, 0.3]}>
                    <boxGeometry args={[0.3, 3, 0.75]} />
                    <meshStandardMaterial map={texture} />
                </mesh>
            </RigidBody>

            {/* Pilar derecho */}
            <RigidBody type="fixed" colliders="cuboid">
                <mesh position={[2, 1.5, 0.3]}>
                    <boxGeometry args={[0.3, 3, 0.75]} />
                    <meshStandardMaterial map={texture} />
                </mesh>
            </RigidBody>
        </group>
    )
}
