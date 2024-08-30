
import './FileiraV.css';

import Conteiner from './Conteiner';

function FileiraV({ nome, icon, titulo, quantidade }) {

    //Loop para gerar a quantidade de botões com seus respectivos NOMES e ICONES
    const botoes = Array.from({ length: quantidade }, (_, index) => (
        <button key={index} className='opcao'>
            <h3>{nome[index % nome.length]}</h3>
            {icon[index % icon.length]}
        </button>
    ));

    return (
        <>
            <Conteiner largura='90%' direcao='column'>
                <h2 className='txt_fileira'>{titulo}</h2>
                {botoes}
            </Conteiner>
        </>
    );
}

export default FileiraV;
