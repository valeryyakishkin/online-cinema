import { Component } from "../../../core";

export class MovieDetails extends Component {
  render() {
    return `<h1>Movie Details Page</h1>`;
  }
}

customElements.define("movie-details-page", MovieDetails);
