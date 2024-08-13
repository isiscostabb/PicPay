import './Celular.css'
import Tela1 from './Telas/tela1'

function Celular() {

  return (
    <>
      <div className='box celular'>
        <img src="./Midia/celular.png" alt="celular" className='celular' />
        <Tela1 />
      </div>
    </>
  )
}

export default Celular
