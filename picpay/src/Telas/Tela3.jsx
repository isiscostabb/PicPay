

//Icones
import {
    FaLock, GiCardPick, FaCreditCard, FaKey, BiSupport, FaPlus
} from  '../Telas/componentes/Icons';


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

                    <Conteiner>
                        <h2 className='txt_fileira'>Meus cartões</h2>
                        <div className='container tres'> 
                            <div className='grupo blocos'>
                                <div className='blocoCard'>
                                    <div className='imgCard'>
                                        <img className='Picpay' src="./Midia/Picpay.png" alt="PicPay"/>
                                        <img className='Mastercard' src="./Midia/Mastercard.png" alt="Master card"/>

                                    </div>
                                    <h2 className='txtCard h2'>Nome do portador</h2>
                                    <h3 className='txtCard h3'>0000 0000 0000 0000</h3>

                                    <div className='saldoCard'>
                                        <div className='barra'></div>
                                        <div className='blocoTxtCard'>
                                            <p className='txtCard p'>Saldo na carteira</p>
                                            <p className='txtCard p2'><strong>R$ 100,00</strong></p>
                                        </div>
                                    </div>

                                </div>
                            </div> 
                        </div>
                    </Conteiner>   

                    <Fileira titulo={'Serviços'} quantidade={6} 
                        icon={[<FaLock size={25}/>, <GiCardPick size={25}/>, <FaCreditCard size={25}/>, <FaKey size={25}/>, <BiSupport size={25}/>, <FaPlus size={25}/> ]}
                        nome={['Bloqueio temporário', 'Aproximar e pagar', 'Cartão de crédito', 'Alterar senha', 'Central de ajuda', 'Mais opções']}/>

                    <Conteiner altura={'200px'}>
                        <div className='movimentacao'> 
                            <h2>Movimentação</h2>

                            <DataMov data={'10 JAN 2024'}>
                                <Movimentacao categoria={'LAZER'} lugar={'Academia'} valor={'R$ 100,00'}/>
                                <Movimentacao categoria={'COMIDA'} lugar={'Mercado Antônio'} valor={'R$ 250,00'}/>
                            </DataMov>
                            
                            <DataMov data={'05 JAN 2024'}>
                                <Movimentacao categoria={'INTERNET'} lugar={'Provedora Interflex'} valor={'R$ 50,00'}/>
                                <Movimentacao categoria={'COMIDA'} lugar={'Lanchonete Esquina'} valor={'R$16,50'}/>
                                <Movimentacao categoria={'COMPRA'} lugar={'Loja Maria'} valor={'R$ 1700,00'}/>

                                <br/>
                                <br/>
                            </DataMov>

                        </div>
                    </Conteiner>
                    
          
                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela3