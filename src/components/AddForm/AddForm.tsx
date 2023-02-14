import React, {FormEvent, useState} from "react";
import {Btn} from "../common/Btn";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";

import "./AddForm.css"

export const AddForm = () => {

    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('')
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    })

    const saveAd = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const {lat, lon} = await geocode(form.address);

            const res = await fetch(`${apiUrl}/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();
            setId(data.id);

        } finally {
            setLoading(false);
        }

    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    }

    if (loading) {
        return <h2>Trwa dodawanie ogłoszenia... </h2>;
    }

    if (id) {
        return <h2>Twoje ogłoszenie "{form.name}" zostało poprawnie dodane do serwisu pod ID ${id}</h2>
    }

    return (<div className="form-wrapper">
        <form className="add-form" action="" onSubmit={saveAd}>
            <h1>Dodawanie ogłoszenia</h1>
            <p>
                <label>
                    Nazwa: <input type="text" name="name" required maxLength={99} value={form.name}
                                  onChange={e => updateForm('name', e.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Opis: <textarea name="description" maxLength={999} value={form.description}
                                    onChange={e => updateForm('description', e.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Cena: <input type="number" name="price" value={form.price}
                                 onChange={e => updateForm('price', Number(e.target.value))}/>
                    <small>Pozostaw 0 w polu, aby nie wyświetlać ceny.</small>
                </label>
            </p>
            <p>
                <label>
                    Link: <input type="url" name="url" maxLength={99} value={form.url}
                                 onChange={e => updateForm('url', e.target.value)}/>
                </label>
            </p>
            <p>
                <label>
                    Adres na mapie: <input type="text" name="address" value={form.address}
                                           onChange={e => updateForm('address', e.target.value)}/>
                </label>
            </p>
            <Btn text="Zapisz"/>
        </form>
    </div>)
};
