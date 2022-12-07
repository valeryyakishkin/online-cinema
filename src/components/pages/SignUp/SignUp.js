import { Component } from "../../../core";
import "../../molecules";
import "../../atoms";
import { initialFieldsState } from "./initialState";

export class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <form class="mt-5">
          <it-input
            type="email"
            label="Email"
            control-name="email"
            value="${email.value}"
            is-valid="${email.isValid}"
            is-touched="${email.isTouched}"
            error-message="${email.errors?.message}"
          ></it-input>
          
          <it-input
            type="password"
            label="Password"
            control-name="password"
            value="${password.value}"
            is-valid="${password.isValid}"
            is-touched="${password.isTouched}"
            error-message="${password.errors?.message}"
          ></it-input>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </it-preloader>
    `;
  }
}

customElements.define("sign-up-page", SignUpPage);
