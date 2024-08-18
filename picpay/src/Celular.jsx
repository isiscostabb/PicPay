
import {RouterProvider } from "react-router-dom"
import routes from "./routes"

import './Celular.css'
import Tela1 from './Telas/tela1'

function Celular() {

  return (
    <>
      <div className='box celular'>
        <img src="./Midia/celular.png" alt="celular" className='celular' />
        <RouterProvider router={routes}>
          <Tela1 />
        </RouterProvider>
      </div>
    </>
  )
}

export default Celular
