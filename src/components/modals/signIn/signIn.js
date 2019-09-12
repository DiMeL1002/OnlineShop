import React from 'react'
import PropTypes from 'prop-types'

import Button from '~c/buttons/button/button'
import Input from '~c/inputs/input/input'
import ModalContainer from '~c/modals/modalContainer/modalContainer'

import './signIn.scss'

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = { hideModal: PropTypes.func }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalContainer title="Авторизация" hideModal={this.hideModal}>
                <form className="signIn-form">
                    <div className="signIn-form__input">
                        <Input type="text" name="Login" placeholder="Логин" />
                    </div>
                    <div className="signIn-form__input">
                        <Input type="password" name="password" placeholder="Пароль" />
                    </div>
                    <Button type="submit" text="Войти" />
                </form>
            </ModalContainer>
        )
    }
}