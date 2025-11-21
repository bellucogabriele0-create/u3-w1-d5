import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"

class MovieSection extends Component {
  state = {
    movies: []
  }

  fetchMovies = () => {
    fetch("https://www.omdbapi.com/?apikey=a00254e8&s=" + this.props.saga)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          const movieItems = data.Search
            .filter((item) => item.Type === "movie")
            .slice(0, 5)
          this.setState({ movies: movieItems })
        }
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.fetchMovies()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.saga !== this.props.saga) {
      this.fetchMovies()
    }
  }

  render() {
    return (
      <Container className="text-white">
        <h4 className="text-white">{this.props.title}</h4>
        <Row className=" text-white row-cols-lg-5">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID}>
              <img
                className="img-fluid"
                src={movie.Poster}
                alt={movie.Title}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default MovieSection