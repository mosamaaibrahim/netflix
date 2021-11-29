import React, { Component } from 'react'
import { getPoster } from '../Utils/constants'
import { _getPersonMovies, _getPeopleDetails } from '../API/peopleApi'
import StarIcon from '../Images/star.png'
import VoteIcon from '../Images/vote.png'
import ArrowIcon from '../Images/arrow.png'
export class SinglePeople extends Component {
    state = {
        person: null,
        movies: []
    }
    componentDidMount = () => {
        let movieId = this.props.match?.params?.id
        _getPeopleDetails(movieId).then((res) => {
            this.setState({ person: res.data }, () => this.movieDetails())
        })
    }

    movieDetails = () => {


        _getPersonMovies(this.state.person?.id)
            .then(res => {
                this.setState({ movies: res.data.cast.slice(0, 9) })
            })

    }

    render() {
        return (
            <div className="grid gap-y-4 md:grid-cols-5 md:gap-5 p-8 ">
                <h1 className="text-3xl font-extrabold text-white md:col-span-4 items-center">{this.state.person?.name}</h1>
                <div className="flex flex-row font-bold justify-between items-center col-span-1">
                    <div className="text-white font-bold flex flex-row items-center justify-center w-full">{Math.floor(this.state.person?.popularity)}
                        <div className="bg-red-700 rounded-full p-1 h-5 mx-2">
                            <img src={ArrowIcon} alt="Star" className="h-full" />
                        </div>
                    </div>
                </div>
                <img src={getPoster(this.state.person?.profile_path)} alt="Poster"
                    className="max-h-[50vh] rounded justify-self-center md:col-span-1"
                />
                <div className="md:col-span-4 md:h-[50vh] w-full flex flex-col">

                    <div className="text-red-600 font-extrabold text-lg">Bio</div>
                    <div className="text-white flex flex-row items-center text-xl mb-10">
                        {this.state.person?.biography}
                    </div>

                    <div className="text-red-600 font-extrabold text-lg">Birth Date</div>
                    <div className="text-white flex flex-row items-center mb-10">
                        {this.state.person?.birthday}
                    </div>


                    <div className="text-red-600 font-extrabold text-lg">Place of birth</div>
                    <div className="text-white flex flex-row items-center mb-10">
                        {this.state.person?.place_of_birth}
                    </div>
                </div>

                <div className="text-red-600 font-extrabold text-lg md:col-span-5">Known for</div>
                <div className="md:col-span-5 grid md:grid-cols-3 gap-5 md:grid-rows-3">
                    {
                        this.state.movies?.map(movie => <div
                            key={movie.id}
                            className="w-full rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl justify-between cursor-pointer hover:bg-gray-800">
                            <img
                                className="md:w-1/2"
                                src={getPoster(movie.poster_path)} alt="Movie poster"></img>
                            <div className="flex flex-col w-full md:w-[45%] justify-around">


                                <div className="flex flex-col">
                                    <span className="text-red-600 font-extrabold text-lg">Known as</span>
                                    <span className="text-white">{movie.character}</span>
                                </div>

                                <div className="text-white text-sm">{movie.overview}</div>
                                <div className="flex flex-row font-bold justify-between items-center mb-4">
                                    <div className="text-white flex flex-row items-center justify-around">{movie?.vote_average}
                                        <img src={StarIcon} alt="Star" className="h-5 mx-2" />
                                    </div>
                                    <div className=" text-white font-bold flex flex-row items-center justify-around">{movie?.vote_count}
                                        <img src={VoteIcon} alt="Star" className="h-5 mx-2" />
                                    </div>
                                    <div className=" text-white font-bold flex flex-row items-center justify-around ">{Math.floor(movie?.popularity)}
                                        <div className="bg-red-700 rounded-full p-1 h-5 mx-2">
                                            <img src={ArrowIcon} alt="Star" className="h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default SinglePeople
