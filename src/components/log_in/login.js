import React, { useState } from "react";
import "./login.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const LogIn = () => {
    // const naviagte = useNavigate("");
    const [error, setError] = useState("");
    const [login, setLogIn] = useState({
        email: "",
        password: ""
    })

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setLogIn({
            ...login,
            [name]: value
        })
    };
    const Blog_login = async (e) => {
        e.preventDefault();
        try {
            const url = "https://blog-app-s1uo.onrender.com/login";
            const { login: res } = await axios.post(url, login);
            localStorage.setItem("token", login.data);
            localStorage.setItem("name", login.name)
            window.location = "/"
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.data.response.message)
            }
        }

    }

    return (
        <div className="login">

            <div className="login-heading">LOGIN</div>
            <label htmlFor="email_login" className="email_login">Email</label>
            <input
                type="email"
                id="email_login"
                name="email"
                value={login.email}
                onChange={handleChnage}
            />

            <label htmlFor="pass_login" className="pass_login">Password</label>
            <input
                type="password"
                id="pass_login"
                name="password"
                value={login.password}
                onChange={handleChnage}
            />
            {error && <div>{error}</div>}
            <button type="Submit" className="btn" onClick={Blog_login}>LOGIN</button>

            <div className="forgot">Forgot Password?</div>
            <div className="alt">Need an account?<span> </span><a href="/signup">SIGN UP</a></div>
        </div>
    )
}
export default LogIn;