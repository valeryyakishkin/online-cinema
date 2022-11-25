import { Component } from "./core";

export class App extends Component {
    
    render() {
      return `
            <it-h1>
                <div slot="header">Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </it-h1>
          `;
  
    }
  }
  
  customElements.define('my-app', App);