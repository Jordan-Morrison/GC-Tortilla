import React from 'react';
import GCSplashScreen from '../organisms/GCSplashScreen';
import GCHeader from '../organisms/GCHeader';
import GCFooter from '../organisms/GCFooter';
import CSS from './GCTortilla.css';

function GCTortilla(props) {

    return (
        <div>
            <GCSplashScreen/>
            <GCHeader/>
            {props.children}
            <GCFooter/>
        </div>
    );
}

export default GCTortilla;