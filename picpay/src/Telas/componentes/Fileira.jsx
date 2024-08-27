
import './Fileira.css'

function Fileira({titulo, cor, altura, largura, alturaTotal, direcao, quantidade}) {

    // gerar array quantidade de blocos
    const blocos = Array.from({ length: quantidade }, (_, index) => (
        <div key={index} className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}> </div>
    ));

    return(
        <>
            <div className='fileira' style={{height: alturaTotal}}>
            <h2 className='txt_fileira'>{titulo}</h2>
                <div className='container tres'> 
                    <div className='grupo blocos' style={{flexDirection: direcao}}>
                        {blocos}
                    </div> 
                </div>
            </div>
        </>
    )}
    export default Fileira