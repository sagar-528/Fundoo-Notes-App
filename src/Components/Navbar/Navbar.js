import React, { Component } from 'react'
import './Navbar.css';
import logo from '../../Assets/keep_48dp.png'

export class Navbar extends Component {
    render() {
        return (
             <nav className='main_nav'>
                <div className='nav_one'>
                    <button className='btn'>
                        <i className='fa fa-bars'></i>
                    </button>
                    <img className='nav_logo' src={logo} alt='logo'/>
                    <span className='brand'>Keep</span>
                </div>
                <div className='nav_two'>
                    <span className='search_icon fa fa-search'></span>
                    <input className='nav_search' type='text' placeholder='search' />
                </div>
                <div className='nav_three'>
                    <button className='btn'>
                        <i className='fa fa-refresh'></i>
                    </button>
                    <button className='btn'>
                        <i className='fa fa-th-large'></i>
                    </button>
                    <button className='btn'>
                        <i className='fa fa-cog'></i>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navbar
