import { Component } from "../../core";

import './button.scss';

export class Button extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
            label: 'Click',
            count: 1,
        };
    }

    changeColor() {
        this.setState((state) => {
            return {
                ...state,
                isActive: !state.isActive,
            };
        });
    }

    plus() {
        this.setState((state) => {
            return {
                ...state,
                count: state.count < 10 ? state.count += 1 : state.count,
            };
        });
    }

    minus() {
        this.setState((state) => {
            return {
                ...state,
                count: state.count > 0 ? state.count -= 1 : state.count,
            };
        });
    }

    registerEvents() {
        this.addEventListener('click', (evt) => {
            if (evt.target.closest('.click')) {
                this.changeColor();
            }
            if (evt.target.closest('.plus')) {
                this.plus();
            }
            if (evt.target.closest('.minus')) {
                this.minus();
            }
        });
    }

    render() {
        return `
            <button class='click ${this.state.isActive ? 'active' : ''}'>${this.state.label}</button>
            <button class='plus'>+</button>
            <span>${this.state.count}</span>
            <button class='minus'>-</button>
        `
    }
}

customElements.define('my-button', Button);
