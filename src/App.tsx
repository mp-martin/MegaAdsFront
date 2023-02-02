import React from 'react';
import './App.css'

export const App = () => {
    return (<>
        <div className="wrapper">
            <header>
                <h1>
                    <span style={{fontWeight: "600"}}>Mega</span><span style={{fontWeight: "100"}}> Ogłoszenia</span>
                </h1>
                <button>Dodaj ogłoszenie</button>
                <div className="search">
                    <input type="text"/>
                    <button>Szukaj</button>
                </div>
            </header>
            <div className="map">
                ...asd
            </div>
        </div>
    </>)
}
