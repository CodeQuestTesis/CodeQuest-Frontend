// src/features/tour/components/OfficeFacade.tsx
import { useRef } from 'react'
import * as THREE from 'three'
import FacadePillars from "./FacadePillars.tsx";
import GlassPanelGrid from "./GlassPanelGrid.tsx";
import BackWall from "./BackWall.tsx";

export default function OfficeFacade() {
    const facadeRef = useRef<THREE.Group>(null)

    return (
        <group ref={facadeRef} position={[0, 0, -5]}>

            {/* Piso exterior opcional */}
            <mesh position={[0, -0.05, -5]}>
                <boxGeometry args={[12, 0.1, 6]} />
                <meshStandardMaterial color="#888888" />
            </mesh>
            <BackWall/>
            <GlassPanelGrid/>
            <FacadePillars/>
        </group>
    )
}
