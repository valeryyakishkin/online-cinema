import { Component } from "./core";
import './components';
import { movieService } from "./services/MovieService";

export class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: '',
    }
  }

  componentDidMount() {
    movieService.getAllMovies()
      .then(({ data }) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data.MOVIES,
          }
        })
      })
  }

  render() {
    return `
        <div id="shell">
          <it-header></it-header>
          <div id="main">
            <div id="content">
              <div class="box">
                <div class="head">
                  <h2>LATEST TRAILERS</h2>
                  <p class="text-right"><a href="#">See all</a></p>
                </div>
                ${this.state.movies
                  .map(item => `
                  <movie-card 
                    title="${item.title}" 
                    poster="${item.poster}" 
                    comments="${item.comments}"
                    ></movie-card>
                  `
                  ).join(' ')}
                  <div class="cl">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      `;

  }
}

customElements.define('my-app', App);
