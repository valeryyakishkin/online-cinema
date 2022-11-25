export class Component extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        this.props = {};
    }
    
    setState(callback) {
        this.state = callback(this.state);
        this.innerHTML = this.render();
    }

    connectedCallback() {
        this.innerHTML = this.render();
        this.componentDidMount();
        this.registerEvents();
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