import React, { Component } from 'react'

import { getPoster } from '../Utils/constants'
import { _getMoviesDetails, _getVideos } from '../API/moviesApi'
export class SingleMovie extends Component {
    state = {
        movie: null,
        video: null
    }
    componentDidMount = () => {
        let movieId = this.props.match?.params?.id
        _getMoviesDetails(movieId).then((res) => {
            this.setState({ movie: res.data }, () => this.getVideo())
        })
    }

    getVideo = () => {
        _getVideos(this.state.movie?.id)
            .then(res => {
                let video = res.data.results.find(vid => vid.site === "YouTube")
                if (video) {
                    this.setState({ video })
                }
            })
    }
    render() {
        return (
            <div className="grid grid-cols-5 gap-5 p-8 ">
                <h1 className="text-3xl font-extrabold text-white col-span-4 items-center">{this.state.movie?.original_title}</h1>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-white">{this.state.movie?.vote_average}</div>
                    <div className="text-white">{this.state.movie?.vote_count}</div>
                    <div className="text-white">{this.state.movie?.popularity}</div>
                </div>
                <img src={getPoster(this.state.movie?.poster_path)} alt="Poster"
                    className="col-span-1 max-h-[50vh] rounded"
                />
                <iframe className="col-span-4 h-[50vh] w-full"
                    title="Movie trailer"
                    src={`https://www.youtube.com/embed/${this.state.video?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${this.state.video?.key}`}>
                </iframe>

                <div className="text-white text-lg col-span-3">
                    {this.state.movie?.overview}
                </div>
            </div>
        )
    }
}

export default SingleMovie
