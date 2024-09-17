
import './Fileira.css'

import Conteiner from './Conteiner';
import Draggable from './Draggable'; 


function Fileira({titulo, cor, altura, largura, alturaTotal, direcao, quantidade, nome, icon}) {
 
// Loop para gerar a quantidade de blocos com seus respectivos NOMES e ICONES
const blocos = Array.from({ length: quantidade }, (_, index) => (
    <div key={index} className='container_bloco'>
        <button className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}>
            {icon[index % icon.length]}
        </button>
        <h3 className='blocoTxt'>{nome[index % nome.length]}</h3>
    </div>
));

    return(
        <>
            <Conteiner altura={alturaTotal}>
            <h2 className='txt_fileira'>{titulo}</h2>
                <div className='container tres'> 
                    <Draggable>
                        <div className='grupo blocos' style={{flexDirection: direcao, width: `${quantidade * 140}px`}}>
                            {blocos}
                        </div>
                    </Draggable>
                </div>
            </Conteiner>
        </>
    )}
    export default Fileira