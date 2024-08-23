
import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'

import './Tela2.css'

import Conteiner from './componentes/Conteiner'

function Tela2() {

    return(
        <>
            <div className='branco'>
                <Header cor='var(--cor3)' margem='-1px' borda='30px 30px 0px 0px' opacidade='50%'/>
                <main>

                    <div className='saldo2'>
                    </div>

                    <Conteiner altura='100px'>
                        <div className='carteira'>
                            <h2 className='carteiraTxt'>Carteira</h2>
                            <div className='carteiras'>
                                <div className='carteiraUm'></div>
                                <div className='carteiraAdd'></div>
                            </div>
                        </div>
                    </Conteiner>

                    <Conteiner altura='300px'>
                        <div className='opcoes'>
                            <div className='opcao'></div>
                            <div className='opcao'></div>
                            <div className='opcao'></div>
                            <div className='opcao'></div>
                        </div>
                    </Conteiner>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela2