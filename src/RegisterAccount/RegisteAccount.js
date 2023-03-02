import React, { useState } from "react";
import "./RegisterAccount.css";
import { NavLink } from "react-router-dom"


const initFormValue = {
    userName: "",
    password: "",
    checkPass: "",
    email: "",
    phone: "",
}

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1
}

const isEmptyValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function RegisterPage() {


    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({})

    const validateForm = () => {
        const error = {}

        if (isEmptyValue(formValue.userName)) {
            error["userName"] = "User name is required"
        }
        if (isEmptyValue(formValue.password)) {
            error["password"] = "Password is required"
        }
        if (isEmptyValue(formValue.checkPass)) {
            error["checkPass"] = "Check pass is required"
        } else if (formValue.checkPass !== formValue.password) {
            error["checkPass"] = "Check pass not match"
        }
        if (isEmptyValue(formValue.email)) {
            error["email"] = "Email name is invalid"
        } else {
            if (!isEmptyValid(formValue.email)) {
                error["email"] = "Email is invalid"
            }
        }
        if (isEmptyValue(formValue.phone)) {
            error["phone"] = "Phone is required"
        }

        setFormError(error)
        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('form value', formValue)

            

            const ListUser = JSON.parse(localStorage.getItem('listUser'))
            const newListUser = [...ListUser, formValue]
            const jsonListUser = JSON.stringify(newListUser)
            localStorage.setItem('listUser', jsonListUser)


            // Chuyển hướng đến trang đăng nhập
            window.location.href = '/';
        } else {
            console.log('form invalid')
        }
    }


    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">SIGN UP</h1>
                <div className="sub-title">Create an account</div>
                <form onSubmit={handleSubmit}>
                    {/* User name */}
                    <div className="mb-2">
                        <label htmlFor="user-name" className="form-label">user name</label>
                        <input
                            id="user-name"
                            type="text"
                            className="form-control"
                            name="userName"
                            value={formValue.userName}
                            onChange={handleChange}
                        />
                        {formError.userName && (
                            <div className="error-feedback">{formError.userName}</div>
                        )}
                    </div>
                    {/* Password */}
                    <div className="mb-2">
                        <label htmlFor="pass" className="form-label">password</label>
                        <input
                            id="pass"
                            type="password"
                            className="form-control"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )}
                    </div>
                    {/* Check pass */}
                    <div className="mb-2">
                        <label htmlFor="check-pass" className="form-label">check pass</label>
                        <input
                            id="check-pass"
                            type="password"
                            className="form-control"
                            name="checkPass"
                            value={formValue.checkPass}
                            onChange={handleChange}
                        />
                        {formError.checkPass && (
                            <div className="error-feedback">{formError.checkPass}</div>
                        )}
                    </div>
                    {/* Email */}
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">email</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formError.email && (
                            <div className="error-feedback">{formError.email}</div>
                        )}
                    </div>
                    {/* Phone */}
                    <div className="mb-2">
                        <label htmlFor="phone" className="form-label">phone</label>
                        <input
                            id="phone"
                            type="text"
                            className="form-control"
                            name="phone"
                            onChange={handleChange}
                        />
                        {formError.phone && (
                            <div className="error-feedback">{formError.phone}</div>
                        )}
                    </div>
                    {/* Submit */}
                    <button type="submit" className="btn-sign-up">Sign up</button>
                    <NavLink to="/" className="title-have-account">Already have an account?</NavLink>

                </form>
            </div>
        </div>
    )
}