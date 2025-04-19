import FirstFloorSection from "../building/FirstFloorSection.tsx";
import SecondFloorSection from "../building/SecondFloorSection.tsx";

interface OfficeBuildingProps {
    floors: number // Número de pisos a crear
}

export default function OfficeBuilding({ floors }: OfficeBuildingProps) {
    // Generamos un array con las posiciones de cada piso
    return (
        <group>
            <FirstFloorSection />

            {Array.from({ length: floors }).map((_, idx) => (
                <SecondFloorSection key={idx} positionY={3.15 * (idx + 1)} />
            ))}
        </group>
    )
}
