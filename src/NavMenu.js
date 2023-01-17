import React from "react";
import Geo from "./image/Geo.png";
import USA from  "./image/USA.png";
import { useTranslation } from "react-i18next";
import i18n from './i18next/i18n'

function NavMenu () {
    const {t} = useTranslation()
    return (
        <div className="navitem">
           <nav className="navmenu">
            <ul>
                <li> {t('Home')}</li>
                <li>{t('Friend List')} </li>
                <li> {t('Profile')} </li>
            </ul>
            <img  onClick={() => i18n.changeLanguage("geo")} className="flag-geo" src={Geo} />
            <img onClick={() => i18n.changeLanguage("en")} className ="flag-usa" src={USA} />
           </nav>
        </div>
    )
}

export default NavMenu