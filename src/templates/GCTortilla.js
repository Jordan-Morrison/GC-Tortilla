import React from 'react';
import PropTypes from 'prop-types';
import GCSplashScreen from '../organisms/GCSplashScreen';
import GCHeader from '../organisms/GCHeader';
import GCFooter from '../organisms/GCFooter';
import CSS from './GCTortilla.css';

function GCTortilla(props) {

    return (
        <div>
            <GCSplashScreen routes={props.routes ? props.routes : undefined} backgroundImage={props.backgroundImage ? props.backgroundImage : undefined}/>
            <GCHeader/>
            {props.children}
            <GCFooter/>
        </div>
    );
}

GCTortilla.propTypes = {
    routes: PropTypes.shape({
        english: PropTypes.string.isRequired,
        french: PropTypes.string.isRequired
    }),
    backgroundImage: PropTypes.string
};

export default GCTortilla;