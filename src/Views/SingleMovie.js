import React, { Component } from 'react'

import { getPoster } from '../Utils/constants'
import { _getMoviesDetails, _getVideos, _getMoviesCredits } from '../API/moviesApi'
import StarIcon from '../Images/star.png'
import VoteIcon from '../Images/vote.png'
import ArrowIcon from '../Images/arrow.png'
export class SingleMovie extends Component {
    state = {
        movie: null,
        video: null,
        cast: []
    }
    componentDidMount = () => {
        let movieId = this.props.match?.params?.id
        _getMoviesDetails(movieId).then((res) => {
            this.setState({ movie: res.data }, () => this.movieDetails())
        })
    }

    movieDetails = () => {
        _getVideos(this.state.movie?.id)
            .then(res => {
                let video = res.data.results.find(vid => vid.site === "YouTube")
                if (video) {
                    this.setState({ video })
                }
            })

        _getMoviesCredits(this.state.movie?.id)
            .then(res => {
                this.setState({ cast: res.data.cast.slice(0, 9) })
            })

    }
    render() {
        return (
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 p-8 ">
                <h1 className="text-3xl font-extrabold text-white col-span-4 items-center">{this.state.movie?.original_title}</h1>
                <div className="flex flex-row font-bold justify-between items-center col-span-1">
                    <div className="text-white flex flex-row items-center justify-around">{this.state.movie?.vote_average}
                        <img src={StarIcon} alt="Star" className="h-5 mx-2" />
                    </div>
                    <div className="text-white font-bold flex flex-row items-center justify-around">{this.state.movie?.vote_count}
                        <img src={VoteIcon} alt="Star" className="h-5 mx-2" />
                    </div>
                    <div className="text-white font-bold flex flex-row items-center justify-around ">{Math.floor(this.state.movie?.popularity)}
                        <div className="bg-red-700 rounded-full p-1 h-5 mx-2">
                            <img src={ArrowIcon} alt="Star" className="h-full" />
                        </div>
                    </div>
                </div>
                <img src={getPoster(this.state.movie?.poster_path)} alt="Poster"
                    className="col-span-1 max-h-[50vh] rounded"
                />
                <iframe className="col-span-4 h-[50vh] w-full"
                    title="Movie trailer"
                    src={`https://www.youtube.com/embed/${this.state.video?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${this.state.video?.key}`}>
                </iframe>

                <div className="text-white text-lg col-span-2">
                    {this.state.movie?.overview}
                </div>
                <div className="col-span-3 grid md:grid-cols-3 md:grid-rows-3 items-center  gap-4">
                    {
                        this.state.cast.map(char =>
                            <div className="flex flex-row h-[100px] justify-start items-center rounded-3xl overflow-hidden shadow-lg hover:bg-gray-800 cursor-pointer">
                                <img
                                    className="h-full"
                                    src={getPoster(char.profile_path)} alt="Cast" />
                                <div className="ml-5">
                                    <p className="text-base text-white">{char.original_name}</p>
                                    <p className="text-sm text-gray-600">{`As ${char.character}`}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}

export default SingleMovie
