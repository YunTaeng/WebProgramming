// Mainpage.js

import React from 'react';
import MapContainer from './MapContainer';
import KeywordSearch from './KeywordSearch';

const Mainpage = () => {
    return (
        <div className="Mainpage">
            <div className='Sidebar'>
                <KeywordSearch />
            </div>
            <div className='MapContainer'>
                <MapContainer />
            </div>
        </div>
    );
};

export default Mainpage;