import React from 'react'

import Overlay from '~c/overlay/overlay'
import PortalModal from '~c/modals/portalModal/portalModal'
import RequestCall from '~c/modals/requestCall/requestCall'

import './headerPhones.scss'

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
                    <span className="phones__number">7 (777) 777-77-77</span>
                    <a className="phones__text phones__text_is-link" onClick={this.showModal}>
                        Заказать звонок
                    </a>
                </div>
                <div className="phones__phone">
                    <span className="phones__number">7 (777) 777-77-77</span>
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