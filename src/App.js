import { Component } from "./core";
import './components';
import { movieService } from "./services/MovieService";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchValue: '',
      selectecCategory: '',
    }
  }

  componentDidMount() {
    movieService.getAllMovies()
      .then(({ data }) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data,
          }
        })
      })
  }

  render() {
    return `
        <div id="shell">
          <it-header></it-header>
          <movie-card title="${this.state.movies.title}" poster="${this.state.movies.poster}" comments="${this.state.movies.comments}"></movie-card>
        </div>
      `;

  }
}

customElements.define('my-app', App);
