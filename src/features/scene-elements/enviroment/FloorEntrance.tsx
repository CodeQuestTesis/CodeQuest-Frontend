import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import EntranceFloor from '../../../assets/textures/EntranceFloor.jpg' // Asegúrate de tener esta imagen

export default function FloorEntrance() {
    const texture = useLoader(THREE.TextureLoader, EntranceFloor)

    // Opcional: repetir textura si el plano es grande
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(10, 10)

    return (
        <mesh receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[20, 0.1, 30]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}