
//Icones
import {
    MdOutlinePix, FaBarcode, FaPiggyBank, MdOutlineSmartphone, FaBusSimple, IoPeople
} from  '../Telas/componentes/Icons';

import './Tela1.css'

import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'
import Fileira from './componentes/Fileira'
import Conteiner from './componentes/Conteiner'
import FileiraSolucoes from './componentes/FileiraSolucoes';

function Tela1() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>

                    <Conteiner altura={'220px'}>
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

                    <Conteiner altura={'170px'}>
                        <div className='pagamentos'>
                            <h2 className='tela1'>PAGAR COM PIX</h2>
                        </div>
                        <div className='pagamentos'>
                            <h2 className='tela1'>PAGAR BOLETO</h2>
                        </div>
                    </Conteiner>

                    <Fileira titulo={'Pro dia a dia'} quantidade={6} alturaTotal={'170px'}
                    nome={["Pix", "Pagar boleto", "Cofrinhos", "Recarga celular", "Transporte", "Pagar pessoas"]}
                    icon={[<MdOutlinePix size={25} />, <FaBarcode size={25} />, <FaPiggyBank size={25} />, <MdOutlineSmartphone size={25} />, <FaBusSimple size={25} />, <IoPeople size={25} />]}
                    />

                    <FileiraSolucoes titulo={'Soluções para você'} cor={'var(--cor3)'} altura={'200px'} largura={'280px'} alturaTotal={'300px'}/>

                    <br/> <br/> <br/>
                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela1