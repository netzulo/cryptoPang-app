'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import PageBase from './PageBase'
import Background from '../../components/features/game/Background'
import Player from '../../components/features/game/Player'
import Ground from '../../components/features/game/Ground'
import Ball from '../../components/features/game/Ball'
// import { OrbitControls } from '@react-three/drei'

export default function PagePlay() {
  return (
    <PageBase>
      <Canvas
        shadows
        // camera frontal top 15º view
        camera={{
          position: [0, 5, 10],
          rotation: [0, 0, 0],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        className='h-full border-2 border-solid border-red-800'
        style={{ height: '88vh', background: '#000' }}
      >
        <Suspense fallback={null}>
          <Background />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Physics gravity={[0, -9.8, 0]}>
            <Ground />

            <Ball position={[0, 9, 0]} color="red" />
            <Ball position={[2, 12, 0]} color="blue" />
            <Ball position={[-2, 15, 0]} color="gray" />

            <Player />
          </Physics>

          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </PageBase>
  )
}
