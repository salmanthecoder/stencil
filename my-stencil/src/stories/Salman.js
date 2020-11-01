import { html } from 'lit-html';
import './button.css';

class HelloWorld extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
      const rootEl = document.createElement('div');
      rootEl.textContent = 'Hello World';
      shadow.appendChild(rootEl);

  }

  connectedCallback() {
    //this.innerHTML = ``
  }

  render() {
    return html `<h1>salman hello</h1>`;
  }

}

window.customElements.define('me-salman', HelloWorld);
/**
 * Primary UI component for user interaction
 */
export const Salman = ({ primary, backgroundColor, size, label, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return html`
    <me-salman></me-salman>
  `;
};


