// export GCHeader from './GCHeader';

import React from 'react';

function GCHeader() {

    const styles = {
        headerBar: {
            width: "100%",
            height: "auto",
            backgroundColor: "white"
        },
        FIP: {
            width: "300px",
            maxWidth: "40%",
            padding: "6px"
        }
        
    };

    return (
        <div style={styles.headerBar}>
            <img style={styles.FIP} src="https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Red_FIP.png"/>
        </div>
    );
}

export default GCHeader;