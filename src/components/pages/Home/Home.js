import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../organisms";
import "./home.scss";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isShowed: false,
      openedKey: null,
      movies: {
        action: [],
        horor: [],
        drama: [],
        comedy: [],
        fantasy: [],
      },
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
            movies: data.reduce((acc, curr) => {
              acc[curr.genre] = acc[curr.genre]?.length
                ? [...acc[curr.genre], curr]
                : [curr];
              return acc;
            }, {}),
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  onShow = (evt) => {
    Object.keys(this.state.movies).map((key) => {
      if (evt.target.closest(`.show-button-${key}`)) {
        this.setState((state) => {
          return {
            ...state,
            openedKey: key,
            isShowed: true,
          };
        });
      }
    });
  };

  componentDidMount() {
    this.getMovies();
    this.addEventListener("click", this.onShow);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onShow);
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <div id="content">

          ${Object.keys(this.state.movies)
            .map((key) => {
              if (!this.state.movies[key].length) {
                return "";
              }
              return `
                <div class="box">
                  <div class="head">
                    <h2>${key}</h2>
                    <p class="text-right"><a class="show-button-${key}">See all</a></p>
                  </div>
                  <div class="home-container">
                    ${
                      this.state.isShowed && this.state.openedKey === key
                        ? `
                        ${this.state.movies[key]
                          .map(
                            ({
                              title,
                              poster,
                              description,
                              id,
                              rating,
                              genre,
                            }) => {
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
                        : `
                        ${this.state.movies[key]
                          .slice(0, 5)
                          .map(
                            ({
                              title,
                              poster,
                              description,
                              id,
                              rating,
                              genre,
                            }) => {
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
                    }
                  </div>
                </div>
              `;
            })
            .join(" ")}
        
        </div>
      </it-preloader>
    `;
  }
}

customElements.define("home-page", HomePage);
