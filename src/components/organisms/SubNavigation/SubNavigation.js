import { Component } from "../../../core";
import "./subNavigation.scss";

class SubNavigation extends Component {
  render() {
    return `
      <div class="sub-navigation">
        <ul>
            <li><a href="#">SHOW ALL</a></li>
            <li><a href="#">LATEST TRAILERS</a></li>
            <li><a href="#">TOP RATED</a></li>
            <li><a href="#">MOST COMMENTED</a></li>
        </ul>

        <div class="search">
            <form action="#" method="get" accept-charset="utf-8">
                <label for="search-field">SEARCH</label>
                <input
                    type="text"
                    name="search field"
                    value="Enter search here"
                    id="search-field"
                    class="blink search-field"
                />
                <input type="submit" value="GO!" class="search-button" />
            </form>
        </div>
    </div>
    `;
  }
}

customElements.define("sub-navigation", SubNavigation);