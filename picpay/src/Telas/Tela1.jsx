
import './Tela1.css'
import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'


function Tela1() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>

                    <div className='container um'>
                        <div className='caixa um'>
                            <div className='texto'>
                                <h2 className='tela1'>Saldo em conta</h2>
                                <h2 className='tela1'>R$ 130,00</h2>
                                <p className='tela1'>Rendendo 102% do CDI</p>
                            </div>
                            <button className='extrato'>
                                <p>VER EXTRATO</p>
                            </button>
                        </div>
                    </div>

                    <div className='container dois'>
                        <div className='caixa dois'>
                            <h2 className='tela1'>PAGAR COM PIX</h2>
                        </div>
                        <div className='caixa dois'>
                            <h2 className='tela1'>PAGAR BOLETO</h2>
                        </div>
                    </div>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela1