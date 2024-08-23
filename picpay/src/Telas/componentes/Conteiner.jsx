
import './Conteiner.css'

function Conteiner({ altura, children }) {
    return (
        <div className="conteiner" style={{ height: altura }}>
            {children}
        </div>
    );
}

export default Conteiner;