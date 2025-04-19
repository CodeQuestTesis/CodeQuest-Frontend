import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import BorderMetal from '../../../../../assets/textures/BorderMetal.jpg'
import {JSX} from "react";
import {RigidBody} from "@react-three/rapier";

export default function GlassPanelGrid() {
    const metalTexture = useLoader(THREE.TextureLoader, BorderMetal)

    const verticalCount = 6
    const spacing = 3
    const height = 3.05
    const glassDepth = 0.1
    const verticalBars = []
    const horizontalBars: JSX.Element[] = []

    for (let i = 0; i < verticalCount; i++) {
        const x = i * spacing
        verticalBars.push(
            <RigidBody key={`v-${i}`} type="fixed" colliders="cuboid">
                <mesh key={`v-${i}`} position={[x, height / 2, 0]}>
                    <boxGeometry args={[0.1, height, 0.15]} />
                    <meshStandardMaterial map={metalTexture} />
                </mesh>
            </RigidBody>
        )
    }

    const horizontalY = [2.5, 3]
    horizontalY.forEach((y, index) => {
        horizontalBars.push(
            <RigidBody key={`h-${index}`} type="fixed" colliders="cuboid">
                <mesh key={`h-${index}`} position={[7.5, y, 0]}>
                    <boxGeometry args={[15, 0.1, 0.15]} />
                    <meshStandardMaterial map={metalTexture} />
                </mesh>
            </RigidBody>
        )
    })

    const superiorglassPanels = []
    for (let i = 0; i < verticalCount - 1; i++) {
        const x = i * spacing + spacing / 2
        superiorglassPanels.push(
            <RigidBody key={`g-${i}`} type="fixed" colliders="cuboid">
                <mesh key={`g-${i}`} position={[x, 2.75, 0]}>
                    <boxGeometry args={[spacing - 0.1, 0.5, glassDepth]} />
                    <meshStandardMaterial color="grey" transparent opacity={0.5} />
                </mesh>
            </RigidBody>
        )
    }

    const glassPanels = []
    for (let i = 0; i < verticalCount - 1; i++) {
        if (i === 2) continue // Saltar el 3er espacio
        const x = i * spacing + spacing / 2
        glassPanels.push(
            <RigidBody key={`g-${i}`} type="fixed" colliders="cuboid">
                <mesh key={`g-${i}`} position={[x, 2.5/2, 0]}>
                    <boxGeometry args={[spacing - 0.1, 2.5, glassDepth]} />
                    <meshStandardMaterial color="grey" transparent opacity={0.5} />
                </mesh>
            </RigidBody>
        )
    }
    return (
        <group position={[-7.5, 0, 0]}>
            {verticalBars}
            {horizontalBars}
            {superiorglassPanels}
            {glassPanels}
        </group>
    )
}
