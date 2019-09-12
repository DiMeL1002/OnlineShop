import React from 'react';
import MediaQuery from 'react-responsive'

import FooterNav from '~c/footer/footerNav'
import FooterContacts from '~c/footer/footerContacts/footerContacts'
import FooterContactsMobile from '~c/footer/footerContacts/footerContactsMobile'
import FooterSocials from '~c/footer/footerSocials'

import './footer.scss'

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
                        © 2010-2019 «Online-Mag». Все права защищены. Информация сайта защищена законом об авторских правах.
                    </span>
                </div>
            </div>
        </footer>
    )
}