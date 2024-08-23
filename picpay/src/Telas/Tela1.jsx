
import './Tela1.css'
import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'

import Fileira from './componentes/Fileira'
import Conteiner from './componentes/Conteiner'


function Tela1() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>

                    <Conteiner altura='220px'>
                        <div className='saldo'>
                            <div className='texto'>
                                <h2 className='tela1'>Saldo em conta</h2>
                                <h2 className='tela1'>R$ 130,00</h2>
                                <p className='tela1'>Rendendo 102% do CDI</p>
                            </div>
                            <button className='extrato'>
                                <p>VER EXTRATO</p>
                            </button>
                        </div>
                    </Conteiner>

                    <Conteiner altura='170px'>
                        <div className='pagamentos'>
                            <h2 className='tela1'>PAGAR COM PIX</h2>
                        </div>
                        <div className='pagamentos'>
                            <h2 className='tela1'>PAGAR BOLETO</h2>
                        </div>
                    </Conteiner>

                    <Fileira titulo='Pro dia a dia'/>

                    <Fileira titulo='Sugestões'/>

                    <Fileira titulo='Soluções para você' cor='var(--cor3)' altura='180px' largura='270px' alturaTotal='300px'/>

                    <br/> <br/> <br/>
                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela1