
import './Movimentacao.css';

function Movimentacao({categoria, lugar, valor}) {
    return (
        <>
            <div className='mov'>
                <div className='icone'></div>
                <div className='dados'>
                    <p className='movimentacaoTxt'>{categoria}</p>
                    <div className='valor'>
                        <p>{lugar}</p>
                        <p className='valorTxt'>{valor}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movimentacao;
