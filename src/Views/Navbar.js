import React, { Component } from 'react'
import Logo from '../Images/netflix.png'
import { Link } from 'react-router-dom'
export class navbar extends Component {
    render() {
        return (
            <div className="flex  h-[70px] md:px-4 items-center">
                <Link to="/" className="mx-4 h-3/4">
                    <img src={Logo} alt="Logo" className="h-full"></img>
                </Link>
                <div className="navBtn">Home</div>
                <div className="navBtn">TV Shows</div>
                <div className="navBtn">Movies</div>
                <div className="navBtn">Celebrities</div>
            </div>
        )
    }
}

export default navbar
