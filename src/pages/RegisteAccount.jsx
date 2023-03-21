import React, { useState } from "react";
import "../assets/css/RegisterAccount.css";
import { NavLink } from "react-router-dom"
import Input from "../components/Input";
import { isEmptyValue, isEmptyValid } from "../assets/utils/validation";
import { addNewUser } from "../services/userAPI";



const initFormValue = {
    userName: "",
    password: "",
    checkPass: "",
    email: "",
    phone: "",
}

export default function RegisterPage() {


    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({})
    const [nextId, setNextId] = useState(50)


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
        setFormValue(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const newUser = {
                id: nextId,
                userName: formValue.userName,
                password: formValue.password,
                email: formValue.email,
                phone: formValue.phone,
            }
            addNewUser(newUser)
                .then(() => {
                    // Chuyển hướng đến trang đăng nhập
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log('form invalid')
        }
        setNextId(nextId + 1);
    }


    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">SIGN UP</h1>
                <div className="sub-title">Create an account</div>
                <form onSubmit={handleSubmit}>
                    {/* User name */}
                    <div className="mb-2">
                        <Input
                            id="user-name"
                            title="user name"
                            type="text"
                            name="userName"
                            formValue={formValue.userName}
                            handleChange={handleChange}
                        />
                        {formError.userName && (
                            <div className="error-feedback">{formError.userName}</div>
                        )}
                    </div>
                    {/* Password */}
                    <div className="mb-2">
                        <Input
                            id="pass"
                            title="pass word"
                            type="password"
                            name="password"
                            formValue={formValue.password}
                            handleChange={handleChange}
                        />
                        {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )}
                    </div>
                    {/* Check pass */}
                    <div className="mb-2">
                        <Input
                            id="check-pass"
                            title="Check password"
                            type="password"
                            name="checkPass"
                            formValue={formValue.checkPass}
                            handleChange={handleChange}
                        />
                        {formError.checkPass && (
                            <div className="error-feedback">{formError.checkPass}</div>
                        )}
                    </div>
                    {/* Email */}
                    <div className="mb-2">
                        <Input
                            id="email"
                            title="email"
                            type="email"
                            name="email"
                            formValue={formValue.email}
                            handleChange={handleChange}
                        />
                        {formError.email && (
                            <div className="error-feedback">{formError.email}</div>
                        )}
                    </div>
                    {/* Phone */}
                    <div className="mb-2">
                        <Input
                            id="phone"
                            title="phone number"
                            type="text"
                            name="phone"
                            formValue={formValue.phone}
                            handleChange={handleChange}
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