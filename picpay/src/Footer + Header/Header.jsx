import './Header.css'

function Header({cor, margem, borda, opacidade}) {

    return(
        <>
            <header style={{backgroundColor: cor, marginBottom: margem, borderRadius: borda}}>
                <button className='circle perfil' style={{opacity: opacidade}}></button>
                <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar' style={{opacity: opacidade}}/>
                <button className='circle chat' style={{opacity: opacidade}}></button>
                <button className='circle notificacao' style={{opacity: opacidade}}></button>
            </header>
        </>
    )}
    export default Header