import { Component } from "../../../core";
import '../../molecules';

export class SignUpPage extends Component {
  render() {
    return `
        <form class="mt-5">
        <it-input></it-input>
        <it-input></it-input>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    `;
  }
}

customElements.define("sign-up-page", SignUpPage);
