import React from 'react'

import Overlay from '~c/overlay/overlay'
import PortalModal from '~c/modals/portalModal/portalModal'
import Registration from '~c/modals/registration/registration'
import SignIn from '~c/modals/signIn/signIn'

import './signedOutLinks.scss'

export default class extends React.Component {
    state = {
        showModal: false,
        showedModal: '',
    }

    showSignInModal = () => {
        this.setState({showModal: true});
        this.setState({showedModal: <SignIn hideModal={this.hideModal} />});
    }

    showRegistrationModal = () => {
        this.setState({showModal: true});
        this.setState({showedModal: <Registration hideModal={this.hideModal} />});
    }

    hideModal = () => {
        this.setState({showModal: false});
        this.setState({showedModal: ''});
    }

    render() {
        return (
            <div className="auth">
                <ul className="auth__list">
                    <li className="auth__item">
                        <a className="auth__link" onClick={this.showRegistrationModal}>
                            Регистрация
                        </a>
                    </li>
                    <li className="auth__item">
                        <a className="auth__link" onClick={this.showSignInModal}>
                            Вход
                        </a>
                    </li>
                </ul>
                {
                    this.state.showModal && (
                        <PortalModal>
                            <Overlay></Overlay>
                            {this.state.showedModal}
                        </PortalModal>
                    )
                }
            </div>
        )
    }
}