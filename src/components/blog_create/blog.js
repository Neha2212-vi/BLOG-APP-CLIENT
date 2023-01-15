import React from "react";
import "./blog.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = ()=> {
    const naviagte = useNavigate("");
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const formData = new FormData();
    formData.append('image', img);
    formData.append('title', title);
    formData.append('description',description);

    const addBlog = ()=> {
        try {
            if(title && description && img){
                axios.post("https://blog-app-s1uo.onrender.com/blogs", formData)
                .then((res)=>{
                    console.log(res);
                    naviagte("/");
                })
            }else{
                alert("All fields are mandatory")
            }
        } catch (error) {
            console.log(error);
        }  
    }

    return (
        <div className="blog">
            <h1>Create Blog</h1>
            <input type="text"
             placeholder="title"
             name="title"
             value={title}
             onChange={(e)=>{setTitle(e.target.value)}}
             />
            <input 
            type="file" 
            name="image"
            // value={img}
            onChange={(e)=>{setImg(e.target.files[0])}}
            />
            <textarea
            rows={10}
            cols={50}
            type="text"
            placeholder="Description"
            onChange={(e)=>{setDescription(e.target.value)}}
            />
            <button  onClick={addBlog}>Save Post</button>
        </div>
    )
}

export default Blog;