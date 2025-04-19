import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BoneColor from '../../../../../assets/textures/BoneColor.jpg'
import {RigidBody} from "@react-three/rapier";

interface SideWallProps {
    position: [number, number, number]
}

export default function SideWall({ position }: SideWallProps) {
    const wallTexture = useLoader(THREE.TextureLoader, BoneColor)

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh position={position}>
                <boxGeometry args={[0.15, 3, 7]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>
        </RigidBody>
    )
}
