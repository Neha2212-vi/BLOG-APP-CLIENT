import './App.css';
import {Routes, Route, Navigate } from "react-router-dom";
import LogIn from './components/log_in/login';
import SignUp from './components/sign_up/sign_up';
import HomePage from './components/home_page/homepage';
import Blog from './components/blog_create/blog';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
        <Routes>
          {user && <Route path="/" exact element={<HomePage/>}/>}
          {user && <Route path="/create" exact element={<Blog/>}/>}
          <Route path="/signup" exact element={<SignUp/>}/>
          <Route path="/login" exact element={<LogIn/>}/>
          <Route path="/" exact element={<Navigate replace={true} to = "/login"/>}/>
        </Routes>
    </div>
  );
}

export default App;
