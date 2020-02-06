import React from 'react';
import fire from '../config/firebase';
import {NavLink,withRouter} from 'react-router-dom';

const Navbar = (props) => {
    const handelSignout = ()=>{
        fire.auth().signOut().then(res=>{
            props.history.push('/');
        });
    }
    // console.log(props);
    return (
        <nav className="nav-wrapper purple lighten-2">
            <div className="container">
                <a href="/" className="brand-logo">Ract</a>
                <ul id="nav-mobile" className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    {props.user!==null?(
                        <li>
                            <button className="btn red" onClick={handelSignout}>Sign out</button>
                        </li>
                    ):(
                        <span>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Signup</NavLink></li>
                        </span>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);