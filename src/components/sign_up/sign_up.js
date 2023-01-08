import React, { useState } from "react";
import "./sign_up.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const naviagte = useNavigate("")
    const [signup, setSignUp] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChnage = (e) => {
        const { name, value } = e.target;
        setSignUp({
            ...signup,
            [name]: value
        })
    };
    const register = async (e) => {
        e.preventDefault();
        try {
            const url = "https://blog-app-s1uo.onrender.com/signup";
            const {signup : res} = await axios.post(url, signup);
            naviagte("/login");
            // console.log(res.message);
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status <= 500 ){
                setError(error.data.response.message)
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
                value={signup.email}
                onChange={handleChnage} />

            <label htmlFor="password" className="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={signup.password}
                onChange={handleChnage} />

            <label htmlFor="CP" className="CP" >Confirm Password</label>
            <input
                type="password"
                id="CP"
                name="confirmPassword"
                value={signup.confirmPassword}
                onChange={handleChnage} />

            {error && <div>{error}</div>}

            <button className="btn" onClick={register}>SIGN UP</button>
        </div>
    )
}
export default SignUp;