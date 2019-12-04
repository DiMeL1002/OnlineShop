import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '~c/buttons/Button/Button'
import ModalContainer from '~c/modals/ModalContainer/ModalContainer'

import './SignIn.scss'

const signinValues = {
    login: '',
    password: '',
}

const signinSchema = Yup.object().shape({
    login: Yup.string()
    .matches(/[a-zA-Z]/, 'Логин может иметь только латинские буквы')
    .required('Введите логин'),
    password: Yup.string()
    .matches(/[a-zA-Z]/, 'Пароль может иметь только латинские буквы')
    .required('Введите пароль'),
});

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = { hideModal: PropTypes.func }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalContainer title="Авторизация" hideModal={this.hideModal}>
                <Formik
                    initialValues={signinValues}
                    validationSchema={signinSchema}
                    onSubmit={() => {
                        // go to API
                        alert("Вы успешно залогинились")
                    }}
                >
                    {() => (
                        <Form className="signIn-form">
                            <div className="signIn-form__input">
                                <Field
                                    className="input"
                                    type="text"
                                    name="login"
                                    placeholder="Логин"
                                />
                                <ErrorMessage name="login">
                                    {msg => <div className="signIn-form__error">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="signIn-form__input">
                                <Field
                                    className="input"
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                />
                                <ErrorMessage name="password">
                                    {msg => <div className="signIn-form__error">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <Button type="submit" text="Войти" />
                        </Form>
                    )}
                </Formik>
            </ModalContainer>
        )
    }
}