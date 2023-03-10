import React, { useState } from "react";
import "../assets/css/RegisterAccount.css";
import { NavLink } from "react-router-dom"
import Input from "../components/Input";


const initFormValue = {
    userName: "",
    password: "",
}

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1
}

export default function SigninPage() {

    const [formValue, setFormValue] = useState(initFormValue)
    const [formError, setFormError] = useState({})
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        const error = {}

        if (isEmptyValue(formValue.userName)) {
            error["userName"] = "User name is required"
        }
        if (isEmptyValue(formValue.password)) {
            error["password"] = "Password is required"
        }

        setFormError(error)
        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setFormValue(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('form value', formValue)

            // Lấy thông tin tài khoản từ localStorage
            const storedListUser = localStorage.getItem('listUser');

            //JSON --> Array
            const listUser =  JSON.parse(storedListUser)

            // Kiểm tra thông tin đăng nhập
            const user =  listUser.find((user) => {
                return (user.userName === formValue.userName && user.password === formValue.password)
            })

            if (user) {
                 // Chuyển hướng đến trang Todo-List
                window.location.href = '/todolist';
            } else {
                setErrorMessage('Username or password is incorrect. Please try again.');
            }
        } else {
            console.log('form invalid')
        }
    }


    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">SIGN IN</h1>
                <div className="sub-title">Let's Get Started</div>
                <form onSubmit={handleSubmit}>
                    {/* User name */}
                    <div className="mb-2">
                        <Input
                            id = "user-name"
                            title = "user name"
                            type = "text"
                            name = "userName"
                            formValue = {formValue.userName}
                            handleChange = {handleChange}
                        />
                        {formError.userName && (
                            <div className="error-feedback">{formError.userName}</div>
                        )}
                    </div>
                    {/* Password */}
                    <div className="mb-2">
                        <Input
                            id = "pass"
                            title = "pass word"
                            type = "password"
                            name = "password"
                            formValue = {formValue.password}
                            handleChange = {handleChange}
                        />
                        {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )}
                    </div>
                    <div className="title-forgot-pass">Forgot password</div>
                    {/* Submit */}
                    <button type="submit" className="btn-sign-in">Sign in</button>
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                    <NavLink to="register" className="title-create-account">Create an account</NavLink>

                </form>
            </div>
        </div>
    )
}
