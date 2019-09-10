import React from 'react';
import PropTypes from 'prop-types';
import CSS from './GCFooter.css';

function GCFooter(props) {

    return (
        <div className={CSS.footer}>
            <img className={CSS.FIP} src="https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_White_FIP.png"/>
        </div>
    );
}

export default GCFooter;