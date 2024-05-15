import React, { useEffect, useState } from 'react';
const { kakao } = window;




function MapContainer() {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.4, 126.6),//초기 제주도
            level: 9
        };
        const map = new kakao.maps.Map(container, options);
    },[])
    

    return (
        <div id='map'></div>
    );
}


export default MapContainer;