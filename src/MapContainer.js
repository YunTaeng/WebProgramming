import React, { useEffect } from 'react';
import { useMap } from './MapContext';
const { kakao } = window;

function MapContainer() {
    const { map, setMap } = useMap();

    useEffect(()=>{
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(33.4, 126.6),//초기 제주도
        level: 9
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
    },[])

    return (
    <div id='map'></div>
    );
}

export default MapContainer;
