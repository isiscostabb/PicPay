
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer() {

    return(
        <>
            <footer>
                <Link to="/">
                    <button className='circle um'></button>
                </Link>

                <Link to="/Tela2">
                    <button className='circle dois'></button>
                </Link>
                
                <Link to="/Tela3">
                    <button className='circle tres'></button>
                </Link>

                <Link to="/Tela4">
                    <button className='circle quatro'></button>
                </Link>

                <Link to="/Tela5">
                    <button className='circle cinco'></button>
                </Link>
            </footer>
        </>

    )}
    export default Footer