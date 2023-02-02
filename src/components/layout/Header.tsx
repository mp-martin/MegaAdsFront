import React from "react";
import './Header.css'
import {Btn} from '../common/Btn'

export const Header = () => (
    <header>
        <h1>
            <span style={{fontWeight: "600"}}>Mega</span><span style={{fontWeight: "100"}}> Ogłoszenia</span>
        </h1>
        <Btn text="Dodaj ogłoszenie"></Btn>
        <div className="search">
            <input type="text"/>
            <button>Szukaj</button>
        </div>
    </header>
);