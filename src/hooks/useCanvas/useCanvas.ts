import useWindow from '@hooks/useWindow/useWindow'

import { useEffect, useMemo, useState } from 'react'

import { IUseCanvasProps, IUseCanvasReturn } from './types'

const useCanvas = ({
  id,
  refObject,
  full = false,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseOut,
}: IUseCanvasProps): IUseCanvasReturn => {
  const [base, setBase] = useState<HTMLCanvasElement | null>(null)
  const { width, height } = useWindow()

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id) as HTMLCanvasElement
      setBase(element)
    }

    if (refObject && refObject.current) {
      const element = refObject.current
      setBase(element)
    }
  }, [id, refObject])

  useEffect(() => {
    if (base && full) {
      base.width = width ?? 300
      base.height = height ?? 150
    }
  }, [base, full, width, height])

  const context = useMemo(() => {
    if (base) return base.getContext('2d')

    return null
  }, [base])

  useEffect(() => {
    if (!base || !context) return

    base.addEventListener('mousedown', (ev: MouseEvent) => {
      if (onMouseDown) onMouseDown(ev, context, base)
    })

    base.addEventListener('mousemove', (ev: MouseEvent) => {
      if (onMouseMove) onMouseMove(ev, context, base)
    })

    base.addEventListener('mouseup', (ev: MouseEvent) => {
      if (onMouseUp) onMouseUp(ev, context, base)
    })

    base.addEventListener('mouseout', (ev: MouseEvent) => {
      if (onMouseOut) onMouseOut(ev, context, base)
    })

    return () => {
      base.removeEventListener('mousedown', (ev: MouseEvent) => {
        if (onMouseDown) onMouseDown(ev, context, base)
      })

      base.removeEventListener('mousemove', (ev: MouseEvent) => {
        if (onMouseMove) onMouseMove(ev, context, base)
      })

      base.removeEventListener('mouseup', (ev: MouseEvent) => {
        if (onMouseUp) onMouseUp(ev, context, base)
      })

      base.removeEventListener('mouseout', (ev: MouseEvent) => {
        if (onMouseOut) onMouseOut(ev, context, base)
      })
    }
  }, [base, context, onMouseDown, onMouseMove, onMouseUp, onMouseOut])

  return { context }
}

export default useCanvas
