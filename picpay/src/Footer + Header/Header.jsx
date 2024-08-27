
import { IoMdChatbubbles } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import './Header.css'

function Header({cor, margem, borda, opacidade}) {

    return(
        <>
            <header style={{backgroundColor: cor, marginBottom: margem, borderRadius: borda}}>
                <button className='circle perfil' style={{opacity: opacidade}}> <FaUser size={20} color='var(--cor4)'/> </button>
                <input type="text" name="pesquisa" id="pesquisa" placeholder='Buscar' style={{opacity: opacidade}}/>
                <button className='circle chat' style={{opacity: opacidade}}> <IoMdChatbubbles size={20} color='var(--cor4)'/> </button>
                <button className='circle notificacao' style={{opacity: opacidade}}> <IoNotifications size={20} color='var(--cor4)'/> </button>

            </header>
        </>
    )}
    export default Header 