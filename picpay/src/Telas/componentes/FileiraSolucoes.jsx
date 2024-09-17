
import './FileiraSolucoes.css'

import Conteiner from './Conteiner';
import Draggable from './Draggable'; 


function FileiraSolucoes({titulo, cor, altura, largura, alturaTotal, direcao}) {



    return(
        <>
            <Conteiner altura={alturaTotal}>
                <h2 className='txt_fileira'>{titulo}</h2>
                <div className='container tres'> 
                    <Draggable>
                        <div className='grupo blocos' style={{flexDirection: direcao, width: largura}}>
                            <div className='container_bloco'>
                                <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}>
                                    <p className='pSolucoes'>Central de segurança</p>
                                    <h2 className='h2Solucoes'>Aumente a proteção da sua conta ativando as camadas de segurança</h2>
                                    <button className='botaoSolucoes'> <p>aumentar proteção</p> </button>
                                </div>
                            </div>
                            <div className='container_bloco'>
                                <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}>
                                    <p className='pSolucoes'>Cartão de outros bancos</p>
                                    <h2 className='h2Solucoes'>Parcele Pix, boletos e mais o que você quiser com qualquer cartão</h2>
                                    <button className='botaoSolucoes'> <p>Adicione um cartão</p> </button>
                                </div>
                            </div>
                            <div className='container_bloco'>
                                <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}>
                                    <p className='pSolucoes'>Adiantamento de FGTS</p>
                                    <h2 className='h2Solucoes'>Antecipe um dinheiro que já é seu em até 2 minutos</h2>
                                    <button className='botaoSolucoes'> <p>Simule gratuitamente</p> </button>
                                </div>
                            </div>
                        </div>
                    </Draggable>
                </div>
            </Conteiner>
        </>
    )}
    export default FileiraSolucoes