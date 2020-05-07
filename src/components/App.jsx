import React from "react";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";
import MovieTabs from "./MovieTabs";
import Pagination from "./Pagination";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.total_pages = 1;

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
            currentPage: 1
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sort_by !== this.state.sort_by || prevState.currentPage !== this.state.currentPage) {
            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}`
        ).then((response) => {
            console.log('then', response)
            return response.json()
        }).then((data) => {
            console.log('then', data)
            this.total_pages = data.total_pages
            this.setState({
                movies: data.results
            })
        }).catch(err => {
            this.setState({
                movies: []
            })
        })
    }

    deleteMovie = movie => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies
        })
        this.deleteMovieFromWillWatch(movie);
    }

    addMovieToWillWatch = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({moviesWillWatch: updateMoviesWillWatch});
    }

    deleteMovieFromWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({moviesWillWatch: updateMoviesWillWatch});
    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        });
    };

    updateCurrentPage = page => {
        console.log('updateCurrentPage', page)
        this.setState({currentPage: page});
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <MovieTabs
                            sort_by={this.state.sort_by}
                            updateSortBy={this.updateSortBy}
                        />
                        <Pagination
                            currentPage={this.state.currentPage}
                            total_pages={this.total_pages}
                            updateCurrentPage={this.updateCurrentPage}
                        />
                        <div className="toggle mr-md-2 text-white">
                            Will Watch: {this.state.moviesWillWatch.length}
                        </div>

                    </div>
                </nav>
                <div className="container-fluid">
                    <div>
                        <br/>
                        <br/>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="row">
                                {
                                    this.state.movies.map(movie => {
                                        return (
                                            <div className="col-4 mb-4" key={movie.id}>
                                                <MovieItem
                                                    movie={movie}
                                                    deleteMovie={this.deleteMovie}
                                                    addMovieToWillWatch={this.addMovieToWillWatch}
                                                    deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                                                />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
