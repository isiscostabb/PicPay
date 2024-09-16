
import './Movimentacao.css';

function Movimentacao({categoria, lugar, valor, icon}) {
    return (
        <>
            <div className='mov'>
                <div className='icone'>{icon}</div>
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
