import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BgWhite from '../../../../../assets/textures/BgWhite.jpg'
import { RigidBody } from '@react-three/rapier'

export default function SideWallSecondFloor({ position }: { position: [number, number, number] }) {
    const wallTexture = useLoader(THREE.TextureLoader, BgWhite)

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh position={position}>
                <boxGeometry args={[0.15, 3, 7.75]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>
        </RigidBody>
    )
}
