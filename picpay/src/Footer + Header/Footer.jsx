
import { IoHomeSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer() {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <footer>
                <Link to="/">
                    <button
                        className={`circle ${activeButton === 'home' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('home')}>
                        <IoHomeSharp size={20}/>
                    </button>
                </Link>

                <Link to="/Tela2">
                    <button
                        className={`circle ${activeButton === 'wallet' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('wallet')}>
                        <FaWallet size={20}/>
                    </button>
                </Link>

                <Link to="/Tela3">
                    <button
                        className={`circle ${activeButton === 'card' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('card')}>
                        <IoIosCard size={25} />
                    </button>
                </Link>

                <Link to="/Tela4">
                    <button
                        className={`circle ${activeButton === 'shop' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('shop')}>
                        <FaShopify size={25} />
                    </button>
                </Link>

                <Link to="/Tela5">
                    <button
                        className={`circle ${activeButton === 'menu' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('menu')}>
                        <IoMenu size={25}/>
                    </button>
                </Link>
            </footer>
        </>
    );
}

export default Footer;