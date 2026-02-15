class HomewardFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
      }

      footer {
        background-color: #6c757d;
        color: white;
        padding: 1rem 0;
        margin-top: 2rem;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
        text-align: center;
      }

      a {
        color: white;
        text-decoration: underline;
      }

      a:hover {
        color: #e9ecef;
      }
    `;

    const footerContent = document.createElement('footer');
    footerContent.innerHTML = `
      <div class="container">
        &copy; 2024 Homeward Security — <a href="#contact">Contact</a>
      </div>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(footerContent);
  }
}

customElements.define('homeward-footer', HomewardFooter);
