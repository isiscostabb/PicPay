
import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'

import Conteiner from './componentes/Conteiner'
import Fileira from './componentes/Fileira'
import DataMov from './componentes/DataMov'
import Movimentacao from './componentes/Movimentacao'

import './Tela3.css'

function Tela3() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>

                    <Fileira titulo='Meus cartões' cor='var(--cor4)' altura='200px' largura='300px' alturaTotal='270px'/>
                    
                    <Fileira titulo='Serviços'/>

                    <Conteiner altura='200px'>
                        <div className='movimentacao'> 
                            <h2>Movimentação</h2>

                            <DataMov data='10 JAN 2024'>
                                <Movimentacao categoria='LAZER' lugar='Academia XXX' valor='R$ 100,00'/>
                                <Movimentacao categoria='COMIDA' lugar='Mercado XXX' valor='R$ 250,00'/>
                            </DataMov>
                            
                            <DataMov data='05 JAN 2024'>
                                <Movimentacao categoria='INTERNET' lugar='Provedora XXX' valor='R$ 50,00'/>
                                <Movimentacao categoria='COMIDA' lugar='Lanchonete XXX' valor='R$16,50'/>
                                <Movimentacao categoria='COMPRA' lugar='Loja XXX' valor='R$ 1700,00'/>
                            </DataMov>

                        </div>
                    </Conteiner>
          
                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela3