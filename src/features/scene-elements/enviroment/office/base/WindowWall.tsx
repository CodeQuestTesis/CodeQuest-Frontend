import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import BgWhite from '../../../../../assets/textures/BgWhite.jpg'

interface WindowWallProps {
    position?: [number, number, number]
}

export default function WindowWall({ position = [0, 0, 0] }: WindowWallProps) {
    const texture = useLoader(THREE.TextureLoader, BgWhite)

    const wallHeight = 2
    const wallDepth = 0.15
    const thickBarWidth = 1.5
    const thinBarWidth = 0.5
    const spaceBetweenBars = 1
    const barYCenter = 1.5

    const bars = []
    const glasses = []

    let xPos = -((thickBarWidth + (9 * (thinBarWidth + spaceBetweenBars))) / 2)

    // Barra izquierda ancha
    bars.push(
        <mesh key="left-thick" position={[xPos + thickBarWidth / 2, barYCenter, 0]}>
            <boxGeometry args={[thickBarWidth, wallHeight, wallDepth]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )

    xPos += thickBarWidth

    for (let i = 0; i < 8; i++) {
        const glassX = xPos + spaceBetweenBars / 2
        const barX = xPos + spaceBetweenBars

        glasses.push(
            <mesh key={`glass-${i}`} position={[glassX, 1.25, 0]}>
                <boxGeometry args={[spaceBetweenBars, 2.5, wallDepth * 0.3]} />
                <meshStandardMaterial color="black" transparent opacity={0.5} />
            </mesh>
        )

        bars.push(
            <mesh key={`bar-${i}`} position={[barX + thinBarWidth / 2, barYCenter, 0]}>
                <boxGeometry args={[thinBarWidth, wallHeight, wallDepth]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        )

        xPos = barX + thinBarWidth
    }

    // Barra derecha ancha
    bars.push(
        <mesh key="right-thick" position={[xPos + thickBarWidth / 2, barYCenter, 0]}>
            <boxGeometry args={[thickBarWidth, wallHeight, wallDepth]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )

    const horizontalBars = [0.5 / 2, 0.5 / 2 + 2.5].map((y, idx) => (
        <mesh key={`h-${idx}`} position={[0, y, 0]}>
            <boxGeometry args={[15, 0.5, wallDepth]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    ))

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <group position={position}>
                {bars}
                {horizontalBars}
                {glasses}
            </group>
        </RigidBody>
    )
}
