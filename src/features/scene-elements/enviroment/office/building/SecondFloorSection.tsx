import Floor from '../base/Floor'
import WindowWall from "../base/WindowWall.tsx";
import SideWallSecondFloor from "../base/SideWallSecondFloor.tsx";
import Roof from "../base/Roof.tsx";

interface SecondFloorSectionProps {
    positionY: number // Recibe la posición Y del piso (por ejemplo, 3.15, 6.3, etc.)
}

export default function SecondFloorSection({ positionY }: SecondFloorSectionProps) {
    return (
        <group position={[0, positionY, -10.7]}>
            {/* Piso */}
            <Floor position={[0, 0.05, 0]} />

            {/* Pared frontal */}
            <WindowWall position={[0, 0, 3.8]} />

            {/* Pared posterior */}
            <WindowWall position={[0, 0, -3.8]} />

            {/* Pared lado izquierdo */}
            <SideWallSecondFloor position={[-7.5, 3 / 2, 0]} />

            {/* Pared lado derecho */}
            <SideWallSecondFloor position={[7.5, 3 / 2, 0]} />

            {/* Techo */}
            <Roof position={[0, 3.1, 0]} />
        </group>
    )
}
