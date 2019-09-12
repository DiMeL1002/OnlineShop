import React from 'react'
import PropTypes from 'prop-types'

import Button from '~c/buttons/button/button'
import Input from '~c/inputs/input/input'
import ModalContainer from '~c/modals/modalContainer/modalContainer'

import './registration.scss'

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = { hideModal: PropTypes.func }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalContainer title="Регистрация" hideModal={this.hideModal}>
                <form className="registration-form">
                    <div className="registration-form__input">
                            <Input type="text" name="Login" placeholder="Логин*" />
                    </div>
                    <div className="registration-form__input">
                        <Input type="password" name="password" placeholder="Введите пароль*" />
                    </div>
                    <div className="registration-form__input">
                        <Input type="password"
                               name="confirm-password"
                               placeholder="Подтверждение пароля*"
                        />
                    </div>
                    <div className="registration-form__input">
                        <Input type="email" name="email" placeholder="Электронная почта*" />
                    </div>
                    <Button type="submit" text="Войти" />
                </form>
            </ModalContainer>
        )
    }
}