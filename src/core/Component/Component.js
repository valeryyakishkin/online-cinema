export class Component extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        this.props = {};
        this.isShadow = false;
    }
    
    setState(callback) {
        this.state = callback(this.state);
        if(this.isShadow) {
            this.shadowRoot.innerHTML = this.render();
        } else {
            this.innerHTML = this.render();
        }
    }

    connectedCallback() {
        if(this.isShadow) {
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = this.render();
        } else {
            this.innerHTML = this.render();
        }
        this.componentDidMount();
    }

    disconnectedCallback() {
        this.componentWillUnMount();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.componentWillUpdate(name, oldValue, newValue);
        this.getAttributeNames().forEach(() => {
            this.props[name] = this.getAttribute(name);
        })
    }

    dispatch(type, props) {
        this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
    }
    
    componentDidMount() {}
    componentWillUpdate() {}
    componentWillUnMount() {}
    render() {}
}