import React from "react";
import imgLogo from "../logo_10x.jpeg";
import { useNavigate } from "react-router-dom";
import "./nav_bar.css"

const NavBar = ({data}) => {
    
    const navigate = useNavigate("");
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <>
        <div className="nav">
            <img src={imgLogo} alt="logo"/>
            <ul className="list">
                <li>Home</li>
                <li className = "create" onClick={()=>{navigate('/create')}}>Create</li>
                <li className="logout" onClick={handleLogout}>Logout</li>
            </ul>
        </div>
        <div>
            {console.log(data)}
            {data.map((ele, i)=>
                <div className="display" key={i}>
                    <div className="title">{ele.title}</div>
                    {/* <p id="blog_img"><img src={ele.image} alt="img"/></p> */}
                    <div className="description">{ele.description}</div>
                </div>
            )}
        </div>
        </>
    )
}
export default NavBar;