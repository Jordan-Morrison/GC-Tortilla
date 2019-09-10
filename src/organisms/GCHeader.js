import React from 'react';
import CSS from './GCHeader.css';

function GCHeader() {

    return (
        <div className={CSS.header}>
            <img className={CSS.FIP} alt="Government of Canada Signature" src="https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Red_FIP.png"/>
        </div>
    );
}

export default GCHeader;