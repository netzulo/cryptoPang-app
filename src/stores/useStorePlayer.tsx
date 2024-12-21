import create from 'zustand'

type PlayerState = {
  position: [number, number, number]
  move: (deltaX: number, deltaY: number, deltaZ: number) => void
  resetPosition: () => void
}

export const useStorePlayer = create<PlayerState>((set) => ({
  position: [0, 0.5, 0],
  move: (deltaX, deltaY, deltaZ) =>
    set((state) => ({
      position: [
        state.position[0] + deltaX,
        state.position[1] + deltaY,
        state.position[2] + deltaZ,
      ],
    })),
  resetPosition: () => set({ position: [0, 0.5, 0] }),
}))
