import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '~c/buttons/button/button'
import ModalContainer from '~c/modals/modalContainer/modalContainer'

import './registration.scss'

const regValues = {
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
}

let password = '';

const regSchema = Yup.object().shape({
    login: Yup.string()
        .matches(/[a-zA-Z]/, 'Логин может иметь только латинские буквы')
        .min(5, 'Слишком короткий логин!')
        .max(50, 'Слишком длинный логин!')
        .required('Введите логин'),
    password: Yup.string()
        .matches(/[a-zA-Z]/, 'Пароль может иметь только латинские буквы')
        .min(5, 'Слишком короткий пароль!')
        .max(50, 'Слишком длинный пароль!')
        .test(
            'password',
            'Пароль не соответствует',
            (value) => {
                password = value;
                return true;
            }
        )
        .required('Введите пароль'),
    confirmPassword: Yup.string()
        .test(
            'confirmPassword',
            'Пароль не соответствует',
            (value) => value === password
        )
        .required('Введите пароль'),
    email: Yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
});

export default class extends React.Component {
    static defaultProps = { hideModal: function() {} }

    static propTypes = { hideModal: PropTypes.func }

    hideModal = () => {
        this.props.hideModal();
    }

    render() {
        return (
            <ModalContainer title="Регистрация" hideModal={this.hideModal}>
                <Formik
                    initialValues={regValues}
                    validationSchema={regSchema}
                    onSubmit={() => {
                        // go to API
                        alert("Вы успешно зарегистрировались")
                    }}
                >
                    {() => (
                        <Form>
                            <div className="signIn-form__input">
                                <Field
                                    className="input"
                                    type="text"
                                    name="login"
                                    placeholder="Логин*"
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
                                    placeholder="Введите пароль*"
                                />
                                <ErrorMessage name="password">
                                    {msg => <div className="signIn-form__error">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="signIn-form__input">
                                <Field
                                    className="input"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Подтверждение пароля*"
                                />
                                <ErrorMessage name="confirmPassword">
                                    {msg => <div className="signIn-form__error">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="signIn-form__input">
                                <Field
                                    className="input"
                                    type="email"
                                    name="email"
                                    placeholder="Электронная почта*"
                                />
                                <ErrorMessage name="email">
                                    {msg => <div className="signIn-form__error">{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <Button type="submit" text="Регистрация" />
                        </Form>
                    )}
                </Formik>
            </ModalContainer>
        )
    }
}