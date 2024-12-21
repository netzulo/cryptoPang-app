import * as THREE from 'three'
import { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useStorePlayer } from '../stores/useStorePlayer'
export const usePlayerMovement = () => {
  const { position, move } = useStorePlayer()
  const [isJumping, setIsJumping] = useState(false)
  const [isCrouching, setIsCrouching] = useState(false)

  // Manejo de eventos de teclado
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight')
      move(0.1, 0, 0) // Mover derecha
    else if (event.key === 'ArrowLeft')
      move(-0.1, 0, 0) // Mover izquierda
    else if (event.key === 'ArrowUp' && !isJumping) {
      setIsJumping(true)
      move(0, 2.5, 0) // Salto
    } else if (event.key === 'ArrowDown') setIsCrouching(true)
  }

  const handleKeyup = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') setIsCrouching(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keyup', handleKeyup)
    }
  }, [isJumping])

  useFrame(() => {
    if (isJumping) {
      move(0, -0.05, 0)
      if (position[1] <= 0) {
        setIsJumping(false)
        move(0, -position[1] + 0.5, 0)
      }
    }
  })

  return {
    position,
    isJumping,
    isCrouching,
  }
}
