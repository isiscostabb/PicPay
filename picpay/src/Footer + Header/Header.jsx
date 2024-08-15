import './Header.css'

function Header() {

    return(
        <>
            <header>
                <button className='circle perfil'></button>
                <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar'/>
                <button className='circle chat'></button>
                <button className='circle notificacao'></button>
            </header>
        </>
    )}
    export default Header