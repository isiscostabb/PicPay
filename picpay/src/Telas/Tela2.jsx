
//Icones
import {
    MdOutlineSecurity, FaPiggyBank, FaArrowTrendUp, FaPlus, PiHandCoinsFill, SiPicpay
} from  '../Telas/componentes/Icons';

import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'
import Conteiner from './componentes/Conteiner'
import FileiraV from "./componentes/FileiraV";

import './Tela2.css'

function Tela2() {

    return(
        <>
            <div className='branco'>
                <Header cor='var(--cor3)' margem='-1px' borda='30px 30px 0px 0px' opacidade='50%'/>
                <main>

                    <div className='saldo2'>
                        <div className='texto tela2'>
                            <h2 className='tela1'>Saldo em conta</h2>
                            <h2 className='tela1'>R$ 130,00</h2>
                            <p className='tela1'>Rendendo 102% do CDI</p>
                        </div>
                        <button className='extrato'>
                            <p>VER SALDOS E RENDIMENTOS</p>
                        </button>
                    </div>

                    <Conteiner altura='100px'>
                        <div className='carteira'>
                            <h2 className='carteiraTxt'>Carteira</h2>
                            <div className='carteiras'>
                                <div className='carteiraUm'> <SiPicpay size={25} color='var(--cor1)'/> <p className="carteiraUmTxt">PicPay</p> </div>
                                <div className='carteiraAdd'> <FaPlus/> </div>
                            </div>
                        </div>
                    </Conteiner>

                    <FileiraV 
                        nome={["Cofrinhos", "Empréstimos", "Investimentos", "Seguros"]}
                        icon={[<FaPiggyBank size={25} />, <PiHandCoinsFill size={25} />, <FaArrowTrendUp size={25} />, <MdOutlineSecurity size={25} />
                        ]} quantidade={4} />

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela2