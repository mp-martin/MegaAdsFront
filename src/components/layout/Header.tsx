import React, {FormEvent, useContext, useState} from "react";
import './Header.css'
import {Btn} from '../common/Btn'
import {FaSearch} from 'react-icons/fa'
import {SearchContext} from "../../contexts/search.context";
import {Logo} from "../Logo/Logo";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext)
    const [inputVal, setInputVal] = useState(search)
    const setSearchFromLocalState = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal)
    }

    return (
        <header>
            <Logo />
            <Btn to="/add" text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <FaSearch size="1.7em" style={{marginRight: "0.5em", marginTop: "0.09em", minWidth: "1em"}}/>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                {/*<button>Szukaj</button>*/}
            </form>
        </header>
    );
};