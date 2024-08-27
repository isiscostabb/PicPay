
import { IoHomeSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer() {

    return(
        <>
            <footer>
                <Link to="/">
                    <button className='circle um'> <IoHomeSharp size={20} color='var(--cor4)'/> </button>
                </Link>

                <Link to="/Tela2">
                    <button className='circle dois'> <FaWallet size={20} color='var(--cor4)'/> </button>
                </Link>
                
                <Link to="/Tela3">
                    <button className='circle tres'> <IoIosCard size={25} color='var(--cor4)'/> </button>
                </Link>

                <Link to="/Tela4">
                    <button className='circle quatro'> <FaShopify size={25} color='var(--cor4)'/> </button>
                </Link>

                <Link to="/Tela5">
                    <button className='circle cinco'> <IoMenu size={25} color='var(--cor4)'/> </button>
                </Link>
            </footer>
        </>

    )}
    export default Footer