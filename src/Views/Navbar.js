import React, { Component } from 'react'

export class navbar extends Component {
    render() {
        return (
            <div className="flex  h-[70px] md:px-4 items-center">
                <img className="mx-4 h-3/4" src="/netflix2.png" alt="Logo"></img>
                <div className="navBtn">Home</div>
                <div className="navBtn">TV Shows</div>
                <div className="navBtn">Movies</div>
                <div className="navBtn">Celebrities</div>
            </div>
        )
    }
}

export default navbar
