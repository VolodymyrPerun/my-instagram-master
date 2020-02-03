import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>
                    <a href="#" className='logo'>
                        <img src={logo}></img>
                    </a>
                </div>
            </header>

        );
    }
}


