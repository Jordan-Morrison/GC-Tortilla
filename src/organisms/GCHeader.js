import React from 'react';
import PropTypes from 'prop-types';
import {optionalProps} from '../atoms/Helpers';
import CSS from './GCHeader.css';

function GCHeader(props) {

    return (
        <div className={CSS.header}>
            <img className={CSS.FIP} alt={props.signatureFIP.altText} title={optionalProps(props.signatureFIP.title)} src={props.signatureFIP.image}/>
        </div>
    );
}

GCHeader.propTypes = {
    signatureFIP: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string,
        title: PropTypes.string
    })
};

GCHeader.defaultProps = {
    signatureFIP: {
        image: "https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Red_FIP.png",
        altText: "Government of Canada Signature"
    }
}

export default GCHeader;