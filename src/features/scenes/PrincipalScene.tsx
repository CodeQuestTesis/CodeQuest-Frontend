import { Canvas } from '@react-three/fiber'
import HumanCamera from "../scene-elements/cameras/Camera.tsx";
import PlayerMovement from "../scene-elements/controls/PlayerMovement.tsx";
import Person from "../../../public/engineer-person/Person.tsx";
import { useRef } from "react";
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'
import FloorEntrance from "../scene-elements/enviroment/FloorEntrance.tsx";
import {Physics} from "@react-three/rapier";
import OfficeBuilding from "../scene-elements/enviroment/office/sections/OfficeBuilding.tsx";

const PrincipalScene = () => {
    const controlsRef = useRef<PointerLockControlsImpl>(null)

    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Canvas de Three.js */}
            <Canvas className="w-full h-full">
                <Physics >
                    {/* Luz ambiental */}
                    <ambientLight intensity={1} />
                    {/* Luz direccional */}
                    <directionalLight position={[30, 10, 5]} intensity={1} />

                    {/*Componente del Suelo*/}
                    <FloorEntrance/>

                    <OfficeBuilding floors={5}/>

                    {/* Llamamos al componente de la cámara */}
                    <HumanCamera ref={controlsRef} />

                    {/* Componente de movimiento del jugador */}
                    <PlayerMovement controlsRef={controlsRef} />

                    {/* Agregar el modelo 3D de la persona */}
                    <Person position={[0, 0, -7]} scale={0.18}/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default PrincipalScene
