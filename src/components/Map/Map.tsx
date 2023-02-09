import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from "types";
import './Map.css'
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon'
import {SingleAd} from "./SingleAd";


export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/search/${search}`);
            const ads = await res.json();
            setAds(ads);
        })();
    }, [search])

    return (<>
        <MapContainer center={[52.2257495, 21.0071009]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
            />
            {ads.map(ad => {
                return (
                    <Marker position={[ad.lat, ad.lon]} key={ad.id}>
                        <Popup>
                            <SingleAd id={ad.id} />
                        </Popup>
                    </Marker>)
            })}
        </MapContainer>
    </>)
}