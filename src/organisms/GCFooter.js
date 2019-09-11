import React from 'react';
import PropTypes from 'prop-types';
import {multiClass, optionalProps} from '../atoms/Helpers';
import CSS from './GCFooter.css';

function GCFooter(props) {

    function chooseFIP() {
        let FIP, title, altText = null;
        if (props.FIP){
             FIP = props.FIP.image;
             title = optionalProps(props.FIP.title);
             altText = optionalProps(props.FIP.altText);
        }
        else if (props.theme === "light"){
            FIP = "https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_Wordmark_Colour_FIP.png";
        }
        else {
            FIP = "https://raw.githubusercontent.com/Jordan-Morrison/GC-Tortilla/master/src/FIPS/Canada_White_FIP.png";
        }
        return <img className={CSS.FIP} title={title} alt={altText} src={FIP}/>
    }

    return (
        <div className={multiClass(CSS.footer, CSS[props.theme])}>
            <div className={multiClass(CSS.linksBox, CSS[props.theme])}>
            { props.links.map( (link, index)=>(
                <span key={index}>
                    <a href={link.url} title={optionalProps(link.title)}>{link.label}</a>
                    <span className={multiClass(CSS.separator, CSS[props.theme])}>&bull;</span>
                </span>
            )) }
            </div>
            {chooseFIP()}
        </div>
    );
}

GCFooter.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']),
    links: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string
    })),
    FIP: PropTypes.shape({
        image: PropTypes.string.isRequired,
        altText: PropTypes.string,
        title: PropTypes.string
    })
};

GCFooter.defaultProps = {
    theme: "dark",
    links: []
};

export default GCFooter;