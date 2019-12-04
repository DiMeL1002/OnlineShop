import React from 'react'
import PropTypes from 'prop-types'

import Button from '~c/buttons/Button/Button'
import Input from '~c/Input/Input'
import ModalContainer from '~c/modals/ModalContainer/ModalContainer'

import './RequestCall.scss'

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = { hideModal: PropTypes.func }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalContainer title="Заказать звонок" hideModal={this.hideModal}>
                <form className="request-call-form">
                    <div className="request-call-form__input">
                        <Input type="text" name="name" placeholder="Ваше имя*" />
                    </div>
                    <div className="request-call-form__input">
                        <Input type="text" name="phone" placeholder="Телефон*" />
                    </div>
                    <Button type="submit" text="Войти" />
                </form>
            </ModalContainer>
        )
    }
}