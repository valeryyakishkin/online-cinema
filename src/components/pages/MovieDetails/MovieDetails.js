import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../atoms";

export class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movie: null,
    };
  }

  static get observedAttributes() {
    return ["id"];
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getMovie() {
    this.toggleIsLoading();
    databaseService
      .getDocument('movies', this.props.id)
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movie: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    console.log(this.state.movie);
    return `
      ${!this.state.movie 
        ? `<h2>Not found</h2>` 
        : `
          <it-preloader is-loading="${this.state.isLoading}">
            <div>
              <img src="${this.state.movie.poster}" />
              <p>${this.state.movie.description}</p>
            </div>
          </it-preloader>
        `}
    `;
  }
}

customElements.define("movie-details-page", MovieDetails);
