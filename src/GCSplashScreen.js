import React, {useState} from 'react';
import ScrollLock from 'react-scrolllock';

function GCSplashScreen(props) {

    const styles = {
        GCSplashScreen: {
            position: "fixed",
            height: "100%",
            width: "100%",
            zIndex: 100,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "white",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        GCSplashScreenWindow: {
            height: "auto",
            backgroundColor: "white",
            margin: "0 auto",
            padding: "50px",
            borderRadius: "6px",
        }
    };

    // Check for first visit, if it is then show the splash screen
    function firstVisit() {
        try {
            if (localStorage.langIsEnglish){
                styles.GCSplashScreen = {
                    display: "none"
                }
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
            <div style={styles.GCSplashScreen}>
                <div style={styles.GCSplashScreenWindow}>
                    <a href={props.routes.english}><button onClick={() => {setLang(true)}}>English</button></a>
                    <a href={props.routes.french}><button onClick={() => {setLang(false)}}>Français</button></a>
                </div>
            </div>
        </ScrollLock>
    );
}

export default GCSplashScreen;