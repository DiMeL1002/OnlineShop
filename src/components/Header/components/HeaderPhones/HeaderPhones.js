import React from 'react'

import Overlay from '~c/Overlay/Overlay'
import PortalModal from '~c/modals/PortalModal/PortalModal'
import RequestCall from '~c/modals/RequestCall/RequestCall'

import './HeaderPhones.scss'

export default class extends React.Component {
    state = { showModal: false }

    showModal = () => {
        this.setState({showModal: true})
    }

    hideModal = () => {
        this.setState({showModal: false})
    }

    render() {
        return (
            <div className="phones">
                <div className="phones__phone">
                    <a className="phones__number" href="tel:87777777777">8 (777) 777-77-77</a>
                    <a className="phones__text phones__text_is-link" onClick={this.showModal}>
                        Заказать звонок
                    </a>
                </div>
                <div className="phones__phone">
                <a className="phones__number" href="tel:87777777777">8 (777) 777-77-77</a>
                    <span className="phones__text">Звонок бесплатный</span>
                </div>
                {
                    this.state.showModal && (
                        <PortalModal>
                            <Overlay />
                            <RequestCall hideModal={this.hideModal} />
                        </PortalModal>
                    )
                }
            </div>
        )
    }
}