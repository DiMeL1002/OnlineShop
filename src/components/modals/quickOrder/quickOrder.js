import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '~c/buttons/Button/Button'
import ModalContainer from '~c/modals/ModalContainer/ModalContainer'

import './QuickOrder.scss'

const quickOrderValues = {
    name: '',
    phone: '',
}

const quickOrderSchema = Yup.object().shape({
    name: Yup.string()
        .required('Введите имя'),
    phone: Yup.number()
        .typeError('Номер телефона должен состоять только из цифр!')
        .required('Введите номер телефона'),
});

QuickOrder.defaultProps = { hideModal: function() {} };
QuickOrder.propTypes = {
    productName: PropTypes.string.isRequired,
    hideModal: PropTypes.func,
};

function QuickOrder(props) {
    let hideModal = () => {
        props.hideModal();
    }

    return (
        <ModalContainer title="Заказ в 1 клик" hideModal={hideModal}>
            <Formik
                initialValues={quickOrderValues}
                validationSchema={quickOrderSchema}
                onSubmit={() => {
                    // go to API
                    hideModal();
                    alert("Ожидайте звонка оператора")
                }}
            >
                {() => (
                    <Form className="quick-order-form">
                        <span className="quick-order-form__product-name">{props.productName}</span>
                        <div className="quick-order-form__input">
                            <Field
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Ваше имя*"
                            />
                            <ErrorMessage name="name">
                                {msg => <div className="quick-order-form__error">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="quick-order-form__input">
                            <Field
                                className="input"
                                type="text"
                                name="phone"
                                placeholder="Номер телефона*"
                            />
                            <ErrorMessage name="phone">
                                {msg => <div className="quick-order-form__error">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <Button type="submit" text="Оформить заказ" />
                    </Form>
                )}
            </Formik>
        </ModalContainer>
    )
}

export default QuickOrder;