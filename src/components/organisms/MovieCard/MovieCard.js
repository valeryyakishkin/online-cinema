import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./movie-card.scss";

export class MovieCard extends core.Component {
  static get observedAttributes() {
    return ["title", "poster", "description", "id", "rating", "genre"];
  }

  componentDidMount() {
    this.classList.add('movie')
  }

  render() {
    return `
            <div class="movie">
              <div class="movie-image">
                <span class="play"><span class="name">${this.props.title}</span></span>
                <it-link to="${appRoutes.movies}/${this.props.id}">
                  <img src="${this.props.poster}" alt="${this.props.title}" />
                </it-link>
              </div>
              <div class="rating">
              <p>RATING</p>
              <div class="stars">
                <div class="stars-in"> </div>
              </div>
            </div>

        `;
  }
}

customElements.define("movie-card", MovieCard);
