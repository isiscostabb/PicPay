
//Icones
import {
    BiSolidShoppingBag, FaCreditCard, MdKeyboard, FaPlus, BiSolidCoupon, FaCartShopping, FaCalendar
} from  '../Telas/componentes/Icons';

import Footer from '../Footer + Header/Footer'
import Conteiner from './componentes/Conteiner'
import Fileira from './componentes/Fileira'

import './Tela4.css'

function Tela4() {

    return(
        <>
            <div className='branco'>

                <Conteiner altura={'100px'}>
                    <div className='head'> 
                        <h2 className='picpay'>PicPay Shop</h2>
                        <div className='busca'>
                            <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar lojas'/>
                            <button className='pedidos'><h2 className='h2Tela4'>PEDIDOS</h2></button>
                        </div>
                    </div>
                </Conteiner>

                <main>

                    <Conteiner altura={'120px'}>
                        <div className='container tres'> 
                            <div className='grupo blocos'>
                                <div className='containerPromo'>

                                    <div className='blocoPromo'>
                                        <img className='promo' src="./Midia/Promo1.png"/>
                                    </div>

                                    <div className='blocoPromo'>
                                        <img className='promo dois' src="./Midia/Promo2.jpg"/>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </Conteiner>
                
                    <Fileira quantidade={4} largura={'100px'}
                        nome={['Ofertas do mês', 'Gift Cards', 'Eletro', 'Todas as lojas']}
                        icon={[<BiSolidShoppingBag size={35}/>, <FaCreditCard size={30}/>, <MdKeyboard size={35}/>, <FaPlus size={30}/>]}/>

                    <Fileira quantidade={4} largura={'100px'}
                        nome={['Cupons', 'Produtos no shop', 'Compra planejada', 'Mais categorias']}
                        icon={[<BiSolidCoupon  size={35}/>, <FaCartShopping size={30}/>, <FaCalendar size={30}/>, <FaPlus size={30}/> ]}/>


                    <Conteiner altura={'240px'}>
                        <h2 className='txt_fileira'>Ofertas com cashback</h2>
                        <div className='container tres'> 
                            <div className='grupo blocos'>
                                <div className='containerPromo'>

                                    <div className='blocoPromo'>
                                        <img className='promo' src="./Midia/Cashback1.jpg"/>
                                        <h3 className='blocoTxt'>Free Fire (10% cashback)</h3>
                                    </div>


                                    <div className='blocoPromo'>
                                        <img className='promo dois' src="./Midia/Cashback2.png"/>
                                        <h3 className='blocoTxt'>Magazine Luiza (2% cashback)</h3>
                                    </div>

                                    <div className='blocoPromo'>
                                        <img className='promo dois' src="./Midia/Cashback3.jpg"/>
                                        <h3 className='blocoTxt'>Netshoes (4% cashback)</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </Conteiner>

                    <br/>
                    <br/>

                </main>
                <Footer/>
            </div>
        </>
    )}
    export default Tela4