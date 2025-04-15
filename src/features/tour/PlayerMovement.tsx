import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib'
import * as THREE from 'three'

const MOVEMENT_SPEED = 0.1
const keysPressed: Record<string, boolean> = {}

interface PlayerMovementProps {
    controlsRef: React.RefObject<PointerLockControlsImpl | null>
}

export default function PlayerMovement({ controlsRef }: PlayerMovementProps) {
    const direction = new THREE.Vector3()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keysPressed[e.key.toLowerCase()] = true
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            keysPressed[e.key.toLowerCase()] = false
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    useFrame(() => {
        if (!controlsRef.current || document.pointerLockElement === null) return

        const yawObject = controlsRef.current.getObject()

        direction.set(0, 0, 0)

        if (keysPressed['w']) direction.z -= 1
        if (keysPressed['s']) direction.z += 1
        if (keysPressed['a']) direction.x -= 1
        if (keysPressed['d']) direction.x += 1

        direction.normalize()

        // Creamos una rotación que solo use el eje Y (horizontal)
        const moveDirection = new THREE.Vector3(direction.x, 0, direction.z)

        // Creamos una rotación solo en el eje Y (horizontal)
        const yawMatrix = new THREE.Matrix4().makeRotationY(yawObject.rotation.y)
        moveDirection.applyMatrix4(yawMatrix).multiplyScalar(MOVEMENT_SPEED)

        // Aplicamos movimiento en plano
        yawObject.position.x += moveDirection.x
        yawObject.position.z += moveDirection.z


        // Sumamos al objeto (sin afectar la altura Y)
        yawObject.position.x += moveDirection.x
        yawObject.position.z += moveDirection.z
    })

    return null
}
