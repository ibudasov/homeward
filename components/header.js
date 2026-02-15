class HomewardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Create a link element for Bootstrap to be applied to shadow DOM
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootswatch@5/dist/flatly/bootstrap.min.css';

    // Create the template HTML
    const template = document.createElement('template');
    template.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">Homeward</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsMain" aria-controls="navbarsMain" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsMain">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#what">What we do</a></li>
              <li class="nav-item"><a class="nav-link" href="#roadmap">Roadmap</a></li>
              <li class="nav-item"><a class="nav-link" href="#specialization">Specialization</a></li>
              <li class="nav-item"><a class="nav-link" href="#clients">Clients</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="py-5 bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h1 class="display-4">Homeward Security</h1>
              <p class="lead">We help with PCI/DSS, SOC2, NIS2 and ISO27k certifications</p>
            </div>
            <div class="col-lg-4 text-lg-end">
              <!-- <img src="logo.png" alt="Homeward logo" style="max-width:160px;"> -->
            </div>
          </div>
        </div>
      </header>
    `;

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('homeward-header', HomewardHeader);
