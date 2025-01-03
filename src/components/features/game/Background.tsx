import { Stars } from '@react-three/drei'

const Background = () => {
  return (
    <Stars
      radius={100}
      depth={50}
      count={10000}
      factor={4}
      saturation={0}
      fade
    />
  )
}

export default Background
