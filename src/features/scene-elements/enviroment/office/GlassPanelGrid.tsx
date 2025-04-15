import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BorderMetal from '../../../../assets/textures/BorderMetal.jpg'
import {JSX} from "react";

export default function GlassPanelGrid() {
    const metalTexture = useLoader(THREE.TextureLoader, BorderMetal)

    const verticalCount = 6
    const spacing = 2
    const height = 2.5
    const glassDepth = 0.1
    const verticalBars = []
    const horizontalBars: JSX.Element[] = []

    for (let i = 0; i < verticalCount; i++) {
        const x = i * spacing
        verticalBars.push(
            <mesh key={`v-${i}`} position={[x, height / 2, 0]}>
                <boxGeometry args={[0.1, height, 0.15]} />
                <meshStandardMaterial map={metalTexture} />
            </mesh>
        )
    }

    const horizontalY = [2, 2.45]
    horizontalY.forEach((y, index) => {
        horizontalBars.push(
            <mesh key={`h-${index}`} position={[5, y, 0]}>
                <boxGeometry args={[10, 0.1, 0.15]} />
                <meshStandardMaterial map={metalTexture} />
            </mesh>
        )
    })

    const superiorglassPanels = []
    for (let i = 0; i < verticalCount - 1; i++) {
        const x = i * spacing + spacing / 2
        superiorglassPanels.push(
            <mesh key={`g-${i}`} position={[x, 2.25, 0]}>
                <boxGeometry args={[spacing - 0.1, 0.5, glassDepth]} />
                    <meshStandardMaterial color="grey" transparent opacity={0.5} />
            </mesh>
        )
    }

    const glassPanels = []
    for (let i = 0; i < verticalCount - 1; i++) {
        if (i === 2) continue // Saltar el 3er espacio
        const x = i * spacing + spacing / 2
        glassPanels.push(
            <mesh key={`g-${i}`} position={[x, 0.33, 0]}>
                <boxGeometry args={[spacing - 0.1, 3.3, glassDepth]} />
                <meshStandardMaterial color="grey" transparent opacity={0.5} />
            </mesh>
        )
    }
    return (
        <group position={[-5, 0, 0]}>
            {verticalBars}
            {horizontalBars}
            {superiorglassPanels}
            {glassPanels}
        </group>
    )
}
