import Home from '@pages/home/Home'
import PlayGround from '@pages/playground/PlayGround'

import type { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    // errorElement: <NotFound />,
  },
  {
    path: '/play',
    element: <PlayGround />,
    // errorElement: <NotFound />,
  },
]
