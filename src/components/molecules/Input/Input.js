import { Component } from "../../../core";

export class Input extends Component {


    render() {
        return `
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3">
          </div>
        </div>
        `
    }
}

customElements.define('it-input', Input);