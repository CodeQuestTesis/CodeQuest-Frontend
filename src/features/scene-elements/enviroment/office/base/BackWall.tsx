import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BoneColor from '../../../../../assets/textures/BoneColor.jpg'
import {RigidBody} from "@react-three/rapier";

export default function BackWall() {
    const wallTexture = useLoader(THREE.TextureLoader, BoneColor)

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh position={[0, 3.1 / 2, -7]}>
                <boxGeometry args={[15.15, 3.1, 0.15]} />
                <meshStandardMaterial map={wallTexture} />
            </mesh>
        </RigidBody>
    )
}
