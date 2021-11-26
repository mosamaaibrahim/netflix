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
                <ShowsSlider title="Trending Movies" shows={this.props.movies.nowPlaying} />
                <ShowsSlider title="Popular Movies" shows={this.props.movies.popularMovies} />
                <ShowsSlider title="Trending Tv" shows={this.props.tvs.tvLatest} />
                <ShowsSlider title="Toprated Tv" shows={this.props.tvs.topRated} />
                <ShowsSlider title="Celebrities" shows={this.props.people.popular} />
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
