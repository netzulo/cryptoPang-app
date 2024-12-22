import React from 'react';
import { useSphere } from '@react-three/cannon';
import { Mesh } from 'three';

type BallProps = {
  position: [number, number, number];
  color?: string;
};

export default function Ball({ position, color = 'red' }: BallProps) {
  const [ref] = useSphere<Mesh>(() => ({
    mass: 1,
    position,
    args: [1.5], // radius of the sphere
    restitution: 1, // coeficient of restitution
    friction: 0.01, // minimum friction
  }));

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
