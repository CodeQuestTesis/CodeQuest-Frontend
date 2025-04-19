import { useRef } from 'react'
import * as THREE from 'three'
import FacadePillars from "./FacadePillars.tsx";
import GlassPanelGrid from "./GlassPanelGrid.tsx";

export default function OfficeFacade() {
    const facadeRef = useRef<THREE.Group>(null)

    return (
        <group ref={facadeRef} position={[0, 0, 0]}>
            <GlassPanelGrid/>
            <FacadePillars/>
        </group>
    )
}
