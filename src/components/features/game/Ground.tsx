import React from 'react'
import { usePlane } from '@react-three/cannon'
import { Mesh } from 'three'

const Ground = () => {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color='green' />
    </mesh>
  )
}

export default Ground
