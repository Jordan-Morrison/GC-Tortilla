import React, {useState} from 'react';
import ScrollLock from 'react-scrolllock';
import CSS from './GCSplashScreen.css';

function GCSplashScreen(props) {

    const splashScreenBackground = {
        backgroundImage: `url(${props.backgroundImage})`
    };

    // Check for first visit, if it is then show the splash screen
    function firstVisit() {
        try {
            if (localStorage.langIsEnglish){
                // Hide screen
                splashScreenBackground.display = "none";
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
            <div className={CSS.splashScreen} style={splashScreenBackground}>
                <div className={CSS.splashScreenWindow}>
                    <a href={props.routes.english}><button onClick={() => {setLang(true)}}>English</button></a>
                    <a href={props.routes.french}><button onClick={() => {setLang(false)}}>Français</button></a>
                </div>
            </div>
        </ScrollLock>
    );
}

export default GCSplashScreen;