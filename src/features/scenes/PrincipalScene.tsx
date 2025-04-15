import { Canvas } from '@react-three/fiber'
import HumanCamera from "../scene-elements/cameras/Camera.tsx";
import PlayerMovement from "../scene-elements/controls/PlayerMovement.tsx";
import { useRef } from "react";
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'
import FloorEntrance from "../scene-elements/enviroment/FloorEntrance.tsx";
import OfficeFacade from "../scene-elements/enviroment/office/OfficeFancade.tsx";

const PrincipalScene = () => {
    const controlsRef = useRef<PointerLockControlsImpl>(null)

    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Canvas de Three.js */}
            <Canvas className="w-full h-full">
                {/* Luz ambiental */}
                <ambientLight intensity={0.5} />
                {/* Luz direccional */}
                <directionalLight position={[10, 10, 5]} intensity={1} />

                {/*Componente del Suelo*/}
                <FloorEntrance/>

                <OfficeFacade/>

                {/* Llamamos al componente de la cámara */}
                <HumanCamera ref={controlsRef} />

                {/* Componente de movimiento del jugador */}
                <PlayerMovement controlsRef={controlsRef} />
            </Canvas>
        </div>
    )
}

export default PrincipalScene
