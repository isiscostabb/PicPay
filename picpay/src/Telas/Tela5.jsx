
import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'
import Fileira from './componentes/Fileira'

import './Tela5.css'

function Tela5() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>

                    <Fileira titulo="Pro dia a dia" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>
                    <Fileira titulo="Conta" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>
                    <Fileira titulo="Cartão" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>
                    <Fileira titulo="Serviços Financeiros" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>
                    <Fileira titulo="Mais Serviços" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>
                    <Fileira titulo="Dúvidas e atendimento" direcao="column" altura="60px" alturaTotal="100%" largura="310px"/>


                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela5