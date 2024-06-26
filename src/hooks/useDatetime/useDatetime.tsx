import { useCallback } from 'react'

type IUseDatetimeReturn = {
  getNow: () => Date
}

const useDatetime = (): IUseDatetimeReturn => {
  const getNow = useCallback(() => {
    return new Date()
  }, [])

  return { getNow }
}

export default useDatetime
