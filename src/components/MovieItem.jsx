import React from "react"

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            willWatch: false
        }
    }

    render() {
        const {movie, deleteMovie, addMovieToWillWatch, deleteMovieFromWillWatch} = this.props;

        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        {this.state.willWatch ? (
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                        this.setState({
                                            willWatch: false
                                        });
                                        deleteMovieFromWillWatch(movie);
                                    }}
                                >
                                    Remove From Will Watch
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        this.setState({
                                            willWatch: true
                                        });
                                        addMovieToWillWatch(movie);
                                    }}
                                >
                                    Add To Will Watch
                                </button>
                            )
                        }
                    </div>
                    <div>
                        <p>{movie.title}</p>
                        <button onClick={deleteMovie.bind(this, movie)}>Delete movie</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;