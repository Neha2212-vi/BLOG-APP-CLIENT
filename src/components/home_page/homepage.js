import React, { useEffect, useState } from "react";
import NavBar from "../home_page/nav_bar";
import axios from "axios";

const HomePage = ()=> {
    const [state, setState] = useState([]);
    useEffect(()=>{
        const blog = ()=> {
            axios.get("http://localhost:5000/blogs")
            .then((res)=>{
                setState(res.data)
                // console.log(res.data)
            })
        }
        blog()
    },[])
    
    return (      
        <div className="home">
           <NavBar  data={state}/>
        </div>
    )
}
export default HomePage;