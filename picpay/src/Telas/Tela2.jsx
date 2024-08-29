
import { FaPlus } from "react-icons/fa";
import { SiPicpay } from "react-icons/si";

import { FaPiggyBank } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";

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

                    <Conteiner altura='300px'>
                        <div className='opcoes'>
                            <div className='opcao'> <h3>Cofrinhos</h3> <FaPiggyBank size={25} color='var(--cor4)'/> </div>
                            <div className='opcao'> <h3>Empréstimos</h3> <PiHandCoinsFill size={25} color='var(--cor4)'/> </div>
                            <div className='opcao'> <h3>Investimentos</h3> <ImStatsBars size={25} color='var(--cor4)'/> </div>
                            <div className='opcao'> <h3>Seguros</h3> <MdOutlineSecurity size={25} color='var(--cor4)'/> </div>
                        </div>
                    </Conteiner>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela2