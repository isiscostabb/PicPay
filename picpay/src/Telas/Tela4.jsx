
import Footer from '../Footer + Header/Footer'
import Conteiner from './componentes/Conteiner'
import Fileira from './componentes/Fileira'

import './Tela4.css'

function Tela4() {

    return(
        <>
            <div className='branco'>
                <main>
                
                    <Conteiner altura='100px'>
                        <div className='head'> 
                            <h2 className='picpay'>PicPay Shop</h2>
                            <div className='busca'>
                                <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar lojas'/>
                                <button className='pedidos'></button>
                            </div>
                        </div>
                    </Conteiner>

                    <Conteiner altura='310px'>
                        <Fileira cor='var(--cor2)' altura='100px' largura='280px' alturaTotal='140px'/>
                        <Fileira alturaTotal='110px'/>
                        <Fileira alturaTotal='110px'/>
                    </Conteiner>


                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela4