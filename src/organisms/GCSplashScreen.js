import React from 'react';
import PropTypes from 'prop-types';
import ScrollLock from 'react-scrolllock';
import {optionalProps} from '../atoms/Helpers';
import CSS from './GCSplashScreen.css';

    /**
     * OPTIONAL PROPS
     * backgroundImage: Image URL or file path
     * 
     * routes: an object containing routes for French and English
     * 
     */

function GCSplashScreen(props) {

    // Used to hide the splash screen
    let display = null;

    // Check for first visit, if it is then show the splash screen
    function firstVisit() {
        try {
            if (localStorage.langIsEnglish){
                // Hide splash screen
                display = "none";
                return false;
            }
            else {
                return true;
            }
        } catch (error) {
            console.error(error);
        }
    }

    function setLang(langIsEnglish) {
        try {
            localStorage.langIsEnglish = JSON.stringify(langIsEnglish);
        } catch (error) {
            console.error(error);
        }
    }

    // Run function to see if this is the user's first visit
    firstVisit();

    return (
        <ScrollLock isActive={firstVisit()}>
            <div className={CSS.splashScreen} style={{backgroundImage: `url(${props.backgroundImage})`, display: display}}>
                <div className={CSS.splashScreenWindow}>
                    <img className={CSS.FIP} alt={props.signatureFIP.altText} title={optionalProps(props.signatureFIP.title)} src={props.signatureFIP.image}/>
                    {props.logo ? <img className={CSS.logo} title={optionalProps(props.logo.title)} alt={optionalProps(props.logo.altText)} src={props.logo.image}/> : undefined}
                    <div className={CSS.languageButtonsBox}>
                        <a href={props.routes.english}><button onClick={() => {setLang(true)}}>English</button></a>
                        <a href={props.routes.french}><button onClick={() => {setLang(false)}}>Français</button></a>
                    </div>
                    <div className={CSS.footer}>
                        <div className={CSS.termsBox}>
                            <a href={props.terms.english.url}>{props.terms.english.label}</a>
                            <span className={CSS.separator}>&bull;</span>
                            <a href={props.terms.french.url}>{props.terms.french.label}</a>
                        </div>
                        <img alt={props.wordmarkFIP.altText} title={optionalProps(props.wordmarkFIP.title)} src={props.wordmarkFIP.image}/>
                    </div>
                </div>
            </div>
        </ScrollLock>
    );
}

GCSplashScreen.propTypes = {
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
    backgroundImage: PropTypes.string
};

GCSplashScreen.defaultProps = {
    signatureFIP: {
        image: "https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Red_FIP.png",
        altText: "Government of Canada Signature"
    },
    routes: {
        english: "/en",
        french: "/fr"
    },
    terms: {
        english: {
            url: "https://www.canada.ca/en/transparency/terms.html",
            label: "Terms & conditions"
        },
        french: {
            url: "https://www.canada.ca/fr/transparence/avis.html",
            label: "Avis"
        }
    },
    wordmarkFIP: {
        image: "https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Wordmark_Colour_FIP.png",
        altText: "Government of Canada Wordmark"
    },
    // Default background image is a random image from unsplash with the same resolution as the user's display
    backgroundImage: `https://source.unsplash.com/random/${typeof window !== "undefined" ? window.innerWidth : 1000}x${typeof window !== "undefined" ? window.innerHeight : 800}`
};

export default GCSplashScreen;