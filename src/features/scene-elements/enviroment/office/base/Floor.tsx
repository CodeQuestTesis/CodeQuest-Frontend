import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import CarpetFloor from '../../../../../assets/textures/CarpetFloor.jpg'
import { RigidBody } from '@react-three/rapier'

interface FloorProps {
    position?: [number, number, number]
}

export default function Floor({ position = [0, 0, 0] }: FloorProps) {
    const texture = useLoader(THREE.TextureLoader, CarpetFloor)

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh position={position}>
                <boxGeometry args={[15., 0.05, 7.45]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    )
}
