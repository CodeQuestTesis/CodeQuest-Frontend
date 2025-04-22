// src/components/Model.tsx

import {useRef, useMemo, useEffect, JSX} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import type { GLTF } from 'three-stdlib'
import * as THREE from 'three'

type GLTFResult = GLTF & {
  nodes: {
    mixamorigHips: THREE.Bone
    man_low_Cube003: THREE.SkinnedMesh
  }
  materials: {
    toon: THREE.MeshStandardMaterial
  }
}

export default function Person(
    props: JSX.IntrinsicElements['group']
) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF('engineer-person/person.gltf') as unknown as GLTFResult
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const first = Object.keys(actions)[0]
    actions[first]?.play()
  }, [actions])

  const mesh = nodes.man_low_Cube003

  return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="man_" rotation={[Math.PI / 2, 0, 0]}>
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
                name="man_low_Cube003"
                geometry={mesh.geometry}
                material={materials.toon}
                skeleton={mesh.skeleton}
            />
          </group>
        </group>
      </group>
  )
}

useGLTF.preload('engineer-person/person.gltf')

