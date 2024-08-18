
import './Fileira.css'

function Fileira({titulo, cor, altura, largura, alturaTotal}) {

    return(
        <>
            <div className='fileira' style={{height: alturaTotal}}>
            <h2 className='txt_fileira'>{titulo}</h2>
                <div className='container tres'>
                    <div className='grupo blocos'>
                        <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}> </div>
                        <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}> </div>
                        <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}> </div>
                        <div className='bloco' style={{backgroundColor: cor, height: altura, width: largura}}> </div>
                    </div>
                </div>
            </div>
        </>
    )}
    export default Fileira