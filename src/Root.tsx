import router from '@router/router'
import '@styles/globals.css'

import { RouterProvider } from 'react-router-dom'

const Root = () => {
  return <RouterProvider router={router} />
}

export default Root
