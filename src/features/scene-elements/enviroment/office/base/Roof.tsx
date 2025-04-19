import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BgWhite from '../../../../../assets/textures/BgWhite.jpg'
import {RigidBody} from "@react-three/rapier";

interface RoofProps {
    position?: [number, number, number]
}

export default function Roof({ position = [0, 3.1, -3.2] }: RoofProps) {
    const texture = useLoader(THREE.TextureLoader, BgWhite)

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh position={position}>
                <boxGeometry args={[15.15, 0.15, 7.75]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </RigidBody>
    )
}
