import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BgWhite from '../../../../assets/textures/BgWhite.jpg'

export default function Roof() {
    const texture = useLoader(THREE.TextureLoader, BgWhite)

    return (
        <mesh position={[0, 2.5 + 0.075, -3.2]}>
            <boxGeometry args={[10, 0.15, 7.75]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}