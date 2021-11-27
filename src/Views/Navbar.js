import React, { Component } from 'react'
import Logo from '../Images/netflix.png'
export class navbar extends Component {
    render() {
        return (
            <div className="flex  h-[70px] md:px-4 items-center">
                <img className="mx-4 h-3/4" src={Logo} alt="Logo"></img>
                <div className="navBtn">Home</div>
                <div className="navBtn">TV Shows</div>
                <div className="navBtn">Movies</div>
                <div className="navBtn">Celebrities</div>
            </div>
        )
    }
}

export default navbar
