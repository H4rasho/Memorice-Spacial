import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <footer className="memorice__footer">

            <div>
                <h4 className="memorice__autor">Desarrollado por</h4>
                <h5 className="memorice__autor">H4rasho</h5>
                <FontAwesomeIcon icon= {faTwitter} size="2x"/> <span>  Twitter</span>
            </div>
            <div>
                <h4 className="memorice__autor">Diseño de naves</h4>
                <h5 className="memorice__autor">Maximus Games Studios</h5>
                <FontAwesomeIcon icon= {faInstagram} size="2x"/> <span>  Instagram</span>
            </div>
        </footer>
    )
}

