import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
function Nav()
{
    return (
        <div className="navbar">
            <div className="title"><h2>NETFLIX</h2></div>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Users</Link>
                <Link to="/products">Products</Link>
                <Link to="/signin">SignIn</Link>
                <Link to="/signup">SignUp</Link>
            </div>
        </div>
    )
};
export default Nav;