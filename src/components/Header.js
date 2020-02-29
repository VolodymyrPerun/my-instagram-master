import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css'
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>
                    <Link to='/' className='logo'>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">Стрічка</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">Профіль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}


