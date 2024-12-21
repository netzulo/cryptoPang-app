import * as THREE from 'three'
import React from 'react'
import { usePlayerMovement } from '../../../hooks/usePlayerMovement'

const Player: React.FC = () => {
  const { position } = usePlayerMovement()

  return (
    <group position={position}>
      {/* Geometría principal */}
      <mesh castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='blue' />
      </mesh>

      {/* Bordes de la geometría */}
      <lineSegments>
        <edgesGeometry
          attach='geometry'
          args={[new THREE.BoxGeometry(1, 1, 1)]}
        />
        <lineBasicMaterial attach='material' color='white' />
      </lineSegments>
    </group>
  )
}

export default Player
