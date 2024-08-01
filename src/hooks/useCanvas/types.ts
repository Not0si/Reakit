import { RefObject } from 'react'

interface IUseCanvasPropsWithId {
  id: string
  refObject?: RefObject<HTMLCanvasElement>
}

interface IUseCanvasPropsWithRef {
  id?: string
  refObject: RefObject<HTMLCanvasElement>
}

export type IUseCanvasProps = (
  | IUseCanvasPropsWithId
  | IUseCanvasPropsWithRef
) & {
  full?: boolean
  onMouseDown?: (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => void
  onMouseMove?: (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => void
  onMouseUp?: (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => void
  onMouseOut?: (
    event: MouseEvent,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ) => void
}

export interface IUseCanvasReturn {
  context: CanvasRenderingContext2D | null
}
