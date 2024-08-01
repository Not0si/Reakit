import { useState } from 'react'

const useDraw = () => {
  const [isDrawing, setIsDrawing] = useState(false)

  const startDrawing = (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => {
    const x = event.clientX - canvas.offsetLeft
    const y = event.clientY - canvas.offsetTop

    context.beginPath()
    context.moveTo(x, y)

    setIsDrawing(true)
  }

  const draw = (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => {
    if (!isDrawing) return

    const x = event.clientX - canvas.offsetLeft
    const y = event.clientY - canvas.offsetTop

    context.lineTo(x, y)
    context.stroke()
  }

  const endDrawing = () => {
    setIsDrawing(false)
  }

  return { startDrawing, draw, endDrawing }
}

export default useDraw
