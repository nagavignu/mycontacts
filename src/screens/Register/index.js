import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import RegisterComponent from '../../components/Signup';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axiosInstance.get('/contacts').catch((error) => {console.log(error)})
    }, [])

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});

        if (value !== "") {
            if (name === 'password') {
                if (value.length > 8 || value.length < 8) {
                    setErrors(prev => {
                        return {...prev, [name]: "This field need exact 8 chars"}
                    })
                } else {
                    setErrors(prev => {
                        return {...prev, [name]: null}
                    })
                }
            } else {
                setErrors(prev => {
                    return {...prev, [name]: null}
                })
            }
        } else {
            setErrors(prev => {
                return {...prev, [name]: "This field is required"}
            })
        }
    }

    const onSubmit = () => {
        if (!form.userName) {
            setErrors(prev => {
                return {...prev, userName: "Please add a username"}
            });
        }
        if (!form.firstName) {
            setErrors(prev => {
                return {...prev, firstName: "Please add a first name"}
            });
        }
        if (!form.lastName) {
            setErrors(prev => {
                return {...prev, lastName: "Please add a last name"}
            });
        }
        if (!form.email) {
            setErrors(prev => {
                return {...prev, email: "Please add an email"}
            });
        }
        if (!form.password) {
            setErrors(prev => {
                return {...prev, password: "Please add a password"}
            });
        }
    }

    return (
        <RegisterComponent 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            errors={errors}
        />
    );
}

export default Register;