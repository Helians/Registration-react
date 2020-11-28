import React, { useState, useEffect } from 'react';
import FieldWrapper from './FieldWrapper';
import './Register.css';
import { useHistory } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [fieldsDescription, setFieldsDescription] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(true);

    let history = useHistory();

    useEffect(() => {
        setFieldsDescription([
            {
                label: 'First Name*',
                name: 'firstname',
            },
            {
                label: 'Last Name',
                name: 'lastname',
            },
            {
                label: 'Roll Number*',
                name: 'rollnumber',
            },
            {
                label: 'Email Address*',
                name: 'email',
            },
            {
                label: 'Session*',
                name: 'session',
                isDropdown: true,
            },
            {
                label: 'Phone Number*',
                name: 'phone',
            },
            {
                label: 'What do you want to learn from this session?',
                name: 'learnfromsession',
                isTextarea: true
            },
        ]);
    }, []);

    const validateUser = () => {
        if (formData['firstname'] === '' || formData['firstname'] === undefined) {
            setErrorMessage('First name is required');
            setButtonDisable(true);
            return;
        }

        if (formData['firstname'].length > 20) {
            setErrorMessage('First name should not be more than 20 characters');
            setButtonDisable(true);
            return;
        }

        if (formData['rollnumber'] === '' || formData['rollnumber'] === undefined) {
            setErrorMessage('Roll Number is required');
            setButtonDisable(true);
            return;
        }

        if (formData['rollnumber'].length > 10) {
            setErrorMessage('Roll Number should not be more than 10 characters');
            setButtonDisable(true);
            return;
        }

        if (formData['email'] === '' || formData['email'] === undefined) {
            setErrorMessage('Email is required');
            setButtonDisable(true);
            return;
        }

        const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!regEx.test(formData['email'])) {
            setErrorMessage('Email is Invalid');
            setButtonDisable(true);
            return;
        }

        if (formData['session'] === '' || formData['session'] === undefined) {
            setErrorMessage('Session is required');
            setButtonDisable(true);
            return;
        }

        if (formData['phone'] === '' || formData['phone'] === undefined) {
            setErrorMessage('Phone Number is required');
            setButtonDisable(true);
            return;
        }

        if (isNaN(formData['phone']) || formData['phone'].length > 13) {
            setErrorMessage('Phone Number is Invalid');
            setButtonDisable(true);
            return;
        }
        setButtonDisable(false);
        setErrorMessage('');

    };

    const registerUser = () => {
        if (!buttonDisable) {
            console.log(formData);
            history.push('/success');
        }
    }

    useEffect(() => {
        validateUser();
    }, [formData]);

    const getFormData = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value.trim() });
    };

    return (
        <section className="register">
            <div>
                <div className="register__header">
                    <img className="register__header-logo" src='https://www.mroads.com/static/media/mroads_white_medium_print.14819d62.png' />
                    <p className="register__header-text">
                        Mroads is now offering students the opportunity to take the first step
                        towards becoming the leaders of the next generation of innovation.
                    </p>
                </div>
                <div className="register__form">
                    <p className="register__errormessage">{errorMessage}</p>
                    {fieldsDescription.map((field, index) => (
                        <FieldWrapper
                            key={index}
                            label={field.label}
                            name={field.name}
                            isDropdown={field.isDropdown}
                            isTextarea={field.isTextarea}
                            callback={getFormData}
                        />
                    ))}
                    <input
                        type="submit"
                        value="Register"
                        onClick={() => { registerUser() }}
                        disabled={buttonDisable}
                        className={`register__button ${buttonDisable && `register__button-disabled`}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Register;
