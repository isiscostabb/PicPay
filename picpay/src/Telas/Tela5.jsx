
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

                    <Fileira titulo="Pro dia a dia" direcao="column" altura="60px" alturaTotal="140%" largura="310px" quantidade={10}/>
                    <Fileira titulo="Conta" direcao="column" altura="60px" alturaTotal="100%" largura="310px"quantidade={7}/>
                    <Fileira titulo="Cartão" direcao="column" altura="60px" alturaTotal="100%" largura="310px"quantidade={2}/>
                    <Fileira titulo="Serviços Financeiros" direcao="column" altura="60px" alturaTotal="100%" largura="310px"quantidade={7}/>
                    <Fileira titulo="Mais Serviços" direcao="column" altura="60px" alturaTotal="100%" largura="310px"quantidade={6}/>
                    <Fileira titulo="Dúvidas e atendimento" direcao="column" altura="60px" alturaTotal="100%" largura="310px"quantidade={1}/>
                    
                    <br/>
                    <br/>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela5