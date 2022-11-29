import { Component } from '../../../../core';

export class H1 extends Component {

    constructor() {
        super();
        this.isShadow = true;
    }

    componentDidMount() {

    }

    render() {
        return `
            <div style="display: flex;">
                <slot name="header"></slot>
                <slot></slot>
                <slot></slot>
            <div>
        `;
    }
}

customElements.define('it-h1', H1);