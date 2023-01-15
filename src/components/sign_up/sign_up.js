import React, { useState } from "react";
import "./sign_up.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const naviagte = useNavigate("")
    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    };
    const register = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/signup";
            const { data: res } = await axios.post(url, data);
            naviagte("/login");
            // console.log(res.message);
        } catch (error) {
            console.log(error);
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    };
    return (
        <div className="signUp">
            <label htmlFor="email" className="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChnage} />

            <label htmlFor="password" className="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChnage} />

            <label htmlFor="CP" className="CP" >Confirm Password</label>
            <input
                type="password"
                id="CP"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChnage} />

            {error && <div className="error">{error}</div>}

            <button className="btn" onClick={register}>SIGN UP</button>
        </div>
    )
}
export default SignUp;