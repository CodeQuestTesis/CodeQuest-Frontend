import { PerspectiveCamera, PointerLockControls } from '@react-three/drei' // Importamos la cámara de perspectiva y los controles tipo "jugador" (como un FPS)
import { useRef, useEffect } from 'react' // useRef para referenciar la cámara, useEffect para ajustes iniciales
import { useThree } from '@react-three/fiber' // useThree para acceder al tamaño del canvas desde React Three Fiber
import * as THREE from 'three' // THREE nos permite usar los tipos nativos (como PerspectiveCamera)

// Definimos el componente principal de la cámara, que será reutilizable
export default function HumanCamera() {
    // Creamos una referencia a la cámara (con tipo Three.js real)
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

    // Obtenemos el tamaño del lienzo (canvas) para calcular el aspect ratio
    const { size } = useThree()

    // Este efecto corre una vez al montar o cuando cambia el tamaño
    useEffect(() => {
        if (cameraRef.current) {
            // Configuramos los parámetros ópticos de la cámara
            cameraRef.current.fov = 75                            // Campo de visión tipo humano (75°)
            cameraRef.current.aspect = size.width / size.height   // Relación de aspecto según tamaño del canvas
            cameraRef.current.near = 0.1                          // Distancia mínima de renderizado
            cameraRef.current.far = 1000                          // Distancia máxima de renderizado

            // Actualizamos la proyección con los nuevos valores
            cameraRef.current.updateProjectionMatrix()
        }
    }, [size])

    return (
        <>
            {/* Cámara principal con perspectiva y posición tipo "persona" */}
            <PerspectiveCamera
                makeDefault                                         // La establece como la cámara principal en la escena
                ref={cameraRef}                                     // Asignamos la referencia creada anteriormente
                args={[75, size.width / size.height, 0.1, 1000]}    // mismos valores que seteamos en el useEffect
                position={[0, 0, 0]}                                // Altura de una persona promedio (1.75 metros)
            />

            {/* Controles estilo jugador: con click se entra a modo de movimiento libre */}
            <PointerLockControls selector="#root" />
            {/* selector="#root" indica el elemento HTML sobre el cual se activa el pointer lock */}
        </>
    )
}