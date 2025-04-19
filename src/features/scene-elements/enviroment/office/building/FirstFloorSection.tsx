import BackWall from '../base/BackWall'
import SideWall from '../base/SideWall'
import OfficeFacade from '../facade/OfficeFancade'
import Roof from '../base/Roof'

export default function FirstFloorSection() {
    const zOffset = -7.5
    const wallHeight = 3.1

    return (
        <group position={[0, 0, zOffset]}>
            <BackWall />

            <SideWall position={[-7.5, wallHeight / 2, -3.5]} />
            <SideWall position={[7.5, wallHeight / 2, -3.5]} />

            <OfficeFacade />

            <Roof />
        </group>
    )
}
