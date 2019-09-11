import React from 'react';
import PropTypes from 'prop-types';
import GCSplashScreen from '../organisms/GCSplashScreen';
import GCHeader from '../organisms/GCHeader';
import GCFooter from '../organisms/GCFooter';
import {optionalProps} from '../atoms/Helpers';

function GCTortilla(props) {

    return (
        <div>
            <GCSplashScreen signatureFIP={optionalProps(props.signatureFIP)} logo={optionalProps(props.logo)} routes={optionalProps(props.routes)} terms={optionalProps(props.terms)} wordmarkFIP={optionalProps(props.wordmarkFIP)} backgroundImage={optionalProps(props.backgroundImage)}/>
            <GCHeader signatureFIP={optionalProps(props.signatureFIP)}/>
            {props.children}
            <GCFooter theme={optionalProps(props.footerTheme)} links={optionalProps(props.footerLinks)} FIP={optionalProps(props.wordmarkFIP)}/>
        </div>
    );
}

GCTortilla.propTypes = {
    signatureFIP: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string,
        title: PropTypes.string
    }),
    logo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string,
        title: PropTypes.string
    }),
    routes: PropTypes.shape({
        english: PropTypes.string.isRequired,
        french: PropTypes.string.isRequired
    }),
    terms: PropTypes.shape({
        english: PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired,
        french: PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    }),
    wordmarkFIP: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string,
        title: PropTypes.string
    }),
    footerTheme: PropTypes.oneOf(['light', 'dark']),
    footerLinks: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string
    })),
    backgroundImage: PropTypes.string
};

export default GCTortilla;