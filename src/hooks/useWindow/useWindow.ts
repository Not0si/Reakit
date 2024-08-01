import { useEffect, useState } from 'react'

type dimensionsType = {
  width: number
  height: number
}

const useWindow = () => {
  const [Dimensions, setDimensions] = useState<dimensionsType | null>(null)

  const getDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', getDimensions)

    return () => {
      window.removeEventListener('resize', getDimensions)
    }
  }, [])

  return { ...Dimensions }
}

export default useWindow
