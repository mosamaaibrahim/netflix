import React, { Component } from 'react'
import ShowsSlider from '../Components/ShowsSlider'
//redux
import { connect } from 'react-redux'
import MainShow from '../Components/MainShow'
export class Home extends Component {
    render() {
        return (
            <div>
                <MainShow shows={Object.values(this.props.movies.nowPlaying)} />
                <ShowsSlider title="Trending Movies" shows={this.props.movies.nowPlaying} redirect="/movies" />
                <ShowsSlider title="Popular Movies" shows={this.props.movies.popularMovies} redirect="/movies" />
                <ShowsSlider title="Trending Tv" shows={this.props.tvs.tvLatest} redirect="/tv" />
                <ShowsSlider title="Toprated Tv" shows={this.props.tvs.topRated} redirect="/tv" />
                <ShowsSlider title="Celebrities" shows={this.props.people.popular} redirect="/people" />
            </div>
        )
    }
}
const mapStateToProps = ({ movies, tvs, people }) => {
    return {
        movies,
        tvs,
        people
    }
}

export default connect(mapStateToProps)(Home)
