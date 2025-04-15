// src/features/tour/components/OfficeFacade.tsx
import { useRef } from 'react'
import * as THREE from 'three'
import FacadePillars from "./FacadePillars.tsx";
import GlassPanelGrid from "./GlassPanelGrid.tsx";
import BackWall from "./BackWall.tsx";
import Roof from "./Roof.tsx";

export default function OfficeFacade() {
    const facadeRef = useRef<THREE.Group>(null)

    return (
        <group ref={facadeRef} position={[0, 0, -5]}>
            <Roof/>
            <BackWall/>
            <GlassPanelGrid/>
            <FacadePillars/>
        </group>
    )
}
