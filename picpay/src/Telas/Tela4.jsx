
import Footer from '../Footer + Header/Footer'
import Conteiner from './componentes/Conteiner'
import Fileira from './componentes/Fileira'

import './Tela4.css'

function Tela4() {

    return(
        <>
            <div className='branco'>

                <Conteiner altura='100px'>
                    <div className='head'> 
                        <h2 className='picpay'>PicPay Shop</h2>
                        <div className='busca'>
                            <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar lojas'/>
                            <button className='pedidos'></button>
                        </div>
                    </div>
                </Conteiner>

                <main>
                
                    <Fileira cor='var(--cor2)' altura='100px' largura='280px' alturaTotal='140px' quantidade={2}/>
                    <Fileira alturaTotal='110px' quantidade={4}/>
                    <Fileira alturaTotal='110px' quantidade={4}/>
                    <Fileira titulo="Ofertas com Cashback" cor='var(--cor2)' largura='250px' quantidade={2}/>
                    <Fileira titulo="Produtos" altura='300px' largura='280px' alturaTotal='400px' quantidade={2}/>
                    <Fileira titulo="Gift Card" quantidade={4}/>

                    <br/>
                    <br/>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela4