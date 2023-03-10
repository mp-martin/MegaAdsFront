import React from "react";
import './Header.css'
import {Btn} from '../common/Btn'
import { FaSearch } from 'react-icons/fa'

export const Header = () => (
    <header>
        <h1>
            <span style={{fontWeight: "600"}}>Mega</span><span style={{fontWeight: "100"}}> Ogłoszenia</span>
        </h1>
        <Btn text="Dodaj ogłoszenie" />
        <div className="search">
            <FaSearch size="1.7em" style={{marginRight:"0.5em", marginTop: "0.09em", minWidth:"1em"}}/>
            <input type="text"/>
            {/*<button>Szukaj</button>*/}
        </div>
    </header>
);