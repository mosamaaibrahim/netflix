import React, { Component } from 'react'
import { _getTvDetails, _getVideos, _getTvCast } from '../API/tvApi'
import { getPoster } from '../Utils/constants'
import StarIcon from '../Images/star.png'
import VoteIcon from '../Images/vote.png'
import ArrowIcon from '../Images/arrow.png'
import { Link } from 'react-router-dom'
export class SingleTv extends Component {
    state = {
        movie: null,
        video: null,
        cast: []
    }
    componentDidMount = () => {
        let movieId = this.props.match?.params?.id
        _getTvDetails(movieId).then((res) => {
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

        _getTvCast(this.state.movie?.id)
            .then(res => {
                this.setState({ cast: res.data.cast.slice(0, 9) })
            })

    }
    render() {
        return (
            <div className="grid gap-y-4 md:grid-cols-5 md:gap-5 p-8 ">
                <h1 className="text-3xl font-extrabold text-white md:col-span-4 items-center">{this.state.movie?.original_name}</h1>
                <div className="flex flex-row font-bold justify-between items-center col-span-1">
                    <div className="text-white flex flex-row items-center justify-around md:col-span-1">{this.state.movie?.vote_average}
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
                    className="max-h-[50vh] rounded justify-self-center md:col-span-1"
                />
                <iframe className="md:col-span-4 h-[50vh] w-full"
                    title="Movie trailer"
                    src={`https://www.youtube.com/embed/${this.state.video?.key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${this.state.video?.key}`}>
                </iframe>

                <div className="flex flex-col md:col-span-2">

                    <div className="text-white text-lg font-bold"> "{this.state.movie?.tagline}"</div>
                    <div className="text-white text-lg"> {this.state.movie?.overview}</div>
                    <div className="md:col-span-3 grid md:grid-cols-2  items-center  gap-4">
                        <div className="text-red-600 font-extrabold text-lg">Number of Seasons</div>
                        <div className="text-white flex flex-row items-center">
                            {this.state.movie?.number_of_seasons}
                        </div>

                        <div className="text-red-600 font-extrabold text-lg">Number of eps</div>
                        <div className="text-white flex flex-row items-center">
                            {this.state.movie?.number_of_episodes}
                        </div>

                        <div className="text-red-600 font-extrabold text-lg">Production Companies</div>
                        <div className="text-white flex flex-row items-center justify-between">
                            {
                                this.state.movie?.production_companies.map(comp => <img key={comp.id} className="h-9 shadow-lg" src={getPoster(comp.logo_path)} alt="company logo" />)
                            }
                        </div>

                        <div className="text-red-600 font-extrabold text-lg">Genres</div>
                        <div className="text-white flex flex-row items-center">
                            {
                                this.state.movie?.genres.map(gen => <div key={gen.id} className="text-white mr-2 border-2 border-gray-600 rounded-xl p-1">{gen.name}</div>)
                            }
                        </div>






                    </div>

                </div>
                <div className="md:col-span-3 grid md:grid-cols-3 md:grid-rows-3 items-center  gap-4">
                    {
                        this.state.cast.map(char =>
                            <Link
                                to={`/people/${char.id}`}
                                key={char.id} className="flex flex-row h-[100px] justify-start items-center rounded-3xl overflow-hidden shadow-lg hover:bg-gray-800 cursor-pointer">
                                <img
                                    className="h-full"
                                    src={getPoster(char.profile_path)} alt="Cast" />
                                <div className="ml-5">
                                    <p className="text-base text-white">{char.original_name}</p>
                                    <p className="text-sm text-gray-600">{`As ${char.character}`}</p>
                                </div>
                            </Link>)
                    }
                </div>

                <div className="md:col-span-5 flex flex-col">
                    <div className="text-red-600 font-extrabold text-lg">Seasons</div>

                    <div className="flex flex-col md:flex-row justify-around items-center">
                        {
                            this.state.movie?.seasons?.map(season =>
                                <div
                                    className="my-5 w-[300px] rounded-lg overflow-hidden flex flex-col shadow-2xl">
                                    <img
                                        className="w-full"
                                        src={getPoster(season.poster_path)} alt="Season poster"></img>
                                    <div className="text-white text-xl font-bold">{season.name}</div>
                                    <div className="text-gray-500 text-sm">{season.air_date}</div>
                                    <div className="text-gray-500 text-sm">{season.episode_count} Episodes</div>
                                </div>)
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default SingleTv
