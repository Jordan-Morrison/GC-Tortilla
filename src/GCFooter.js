import React from 'react';

function GCFooter() {

    const styles = {
        footer: {
            width: "100%",
            height: "auto",
            backgroundColor: "black"
        },
        FIP: {
            width: "300px",
            maxWidth: "40%",
            padding: "6px"
        }
        
    };

    return (
        <div style={styles.footer}>
            <img style={styles.FIP} src="https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_White_FIP.png"/>
        </div>
    );
}

export default GCFooter;