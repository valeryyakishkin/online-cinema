import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../organisms";
import "./home.scss";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movies: [],
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getMovies() {
    this.toggleIsLoading();
    databaseService
      .read("movies")
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <div id="content">
          <div class="box">

            <div class="head">
              <h2>LATEST TRAILERS</h2>
              <p class="text-right"><a href="#">See all</a></p>
            </div>
            <div class="home-container">
              ${
                this.state.movies.length > 0
                  ? `
                  ${this.state.movies
                    .map(
                      ({ title, poster, description, id, rating, genre }) => {
                        return `
                      <movie-card
                        id="${id}"
                        title="${title}"
                        poster="${poster}"
                        description="${description}"
                        rating="${rating}"
                        genre="${genre}"
                      ></movie-card>
                    `;
                      }
                    )
                    .join(" ")}
                `
                  : `<h2>Movies is not available</h2>`
              }
            </div>
          </div>
        </div>
      </it-preloader>
    `;
  }
}

customElements.define("home-page", HomePage);
