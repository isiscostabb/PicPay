
//Icones
import {
        MdOutlinePix, MdAttachMoney, MdOutlineSecurity, MdOutlineDomainVerification, MdAccountCircle, MdFamilyRestroom, MdAddCard,
        FaBarcode, FaQrcode, FaMoneyBillTransfer, FaPiggyBank, FaBusSimple, FaCalendar, FaArrowTrendUp, FaPlus, FaEarthAmericas, FaCarRear,
        IoPeople, IoIosDocument,
        GiPayMoney, GiCardPick,
        PiHandCoinsFill,
        BiTransfer, BiSolidDonateHeart, BiSupport, MdOutlineSmartphone
} from  '../Telas/componentes/Icons';

import Footer from '../Footer + Header/Footer'
import Header from '../Footer + Header/Header'
import FileiraV from './componentes/FileiraV'
import Draggable from './componentes/Draggable'; 

function Tela5() {

    return(
        <>
            <div className='branco'>
                <Header/>
                <main>
                        <Draggable>
        
                                <FileiraV titulo={"Pro dia a dia"}
                                        nome={["Pix", "Pagar Boletos", "Pagar com QR Code", "Pagar pessoas", "Cobrar alguém", "Cofrinhos", "Cartão de transporte", "Recarga celular", "Pague junto", "TED"]}
                                        icon={[<MdOutlinePix size={25} />, <FaBarcode size={25} />, <FaQrcode size={25} />, <FaMoneyBillTransfer size={25} />, <MdAttachMoney size={25} />,
                                        <FaPiggyBank size={25} />, <FaBusSimple size={25} />, <MdOutlineSmartphone size={25} />, <IoPeople size={25} />, <BiTransfer size={25} />
                                        ]} quantidade={10} />
                
                                <FileiraV titulo={"Conta"}
                                        nome={["Extrato e Comprovantes", "Adicionar dinheiro", "Adicionar cartão", "Rendimento da conta", "Sacar dinheiro", "PicPay mais", "PicPay Família" ]}
                                        icon={[<IoIosDocument  size={25} />, <GiPayMoney size={25} />, <MdAddCard size={25} />, <FaArrowTrendUp size={25} />, <MdAttachMoney size={25} />,
                                        <FaPlus size={25}/>, <MdFamilyRestroom size={25}/>
                                        ]} quantidade={7} />
                
                                <FileiraV titulo={"Conta"}
                                        nome={["Pedir cartão", "Ver fatura"]}
                                        icon={[<MdAddCard size={25} />, <IoIosDocument  size={25} />
                                        ]} quantidade={2} />
                
                                <FileiraV titulo={"Serviços financeiros"}
                                        nome={["Empréstimos", "Investimentos", "Seguros", "Open Finance", "Contas em dia", "Débito automático", "Trazer salário"]}
                                        icon={[<PiHandCoinsFill size={25} />, <FaArrowTrendUp size={25} />, <MdOutlineSecurity size={25} />, <FaMoneyBillTransfer size={25} />,
                                        <MdOutlineDomainVerification size={25} />, <FaCalendar size={25} />, <GiPayMoney size={25} />
                                        ]} quantidade={7} />
                
                                <FileiraV titulo={"Mais serviços"}
                                        nome={["Multas e IPVA", "Câmbio", "Radar de crédito", "Contas concectadas", "Bom dia mercado", "Central doações" ]}
                                        icon={[<FaCarRear size={25} />, <FaEarthAmericas  size={25} />, <GiCardPick size={25} />, <MdAccountCircle size={25}/>, <FaArrowTrendUp size={25} />,
                                        <BiSolidDonateHeart size={25}/>
                                        ]} quantidade={6} />
                
                                <FileiraV titulo={"Dúvidas e atendimento"}
                                        nome={["Central de ajuda",]} icon={[<BiSupport size={25} /> ]} quantidade={1} />
                
                                <br/>
                                <br/>
                            
                        </Draggable>
                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela5