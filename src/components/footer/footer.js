import React from 'react';
import MediaQuery from 'react-responsive'

import FooterNav from './components/FooterNav/FooterNav'
import FooterContacts from './components/FooterContacts/FooterContacts'
import FooterContactsMobile from './components/FooterContacts/FooterContactsMobile'
import FooterSocials from './components/FooterSocials/FooterSocials'

import './Footer.scss'

export default function() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="container">
                    <div className="footer__content">
                        <FooterNav />
                        <MediaQuery minDeviceWidth={577}>
                            <FooterContacts />
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={576}>
                            <FooterContactsMobile />
                        </MediaQuery>
                    </div>
                </div>
            </div>
            <div className="footer__socials">
                <div className="container">
                    <FooterSocials />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <span className="footer__copyright">
                        © 2010-2019 «Giant». Все права защищены. Информация сайта защищена законом об авторских правах.
                    </span>
                </div>
            </div>
        </footer>
    )
}