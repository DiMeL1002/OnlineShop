import React from 'react'

import Overlay from '~c/Overlay/Overlay'
import PortalModal from '~c/modals/PortalModal/PortalModal'
import Registration from '~c/modals/Registration/Registration'
import SignIn from '~c/modals/SignIn/SignIn'

import './SignedOutLinks.scss'

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