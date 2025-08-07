
class SuperHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
     <div class="navbar-fixed">
        <nav class="nav-dark-bg" role="navigation">
          <div class="nav-wrapper container">
            <!-- Logo container links gepositioneerd -->
            <a id="logo-container" href="#" class="brand-logo left">
              <img
                src="https://www.softwaredam.com/images/logo.svg"
                alt="SOFTWAREDAM Logo"
              />
              <span class="white-text heavy-text-logo">SOFTWAREDAM</span>
            </a>
            <!-- Navigatie links voor grote schermen -->
            <ul class="right hide-on-med-and-down">
              <li><a href="#services" class="white-text">Diensten</a></li>
              <li><a href="#about-us" class="white-text">Over Ons</a></li>
              <li><a href="#careers" class="white-text">Carrières</a></li>
              <li><a href="#contact" class="white-text">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>`
  }
}

class SuperFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `    
    <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text heavy-text-logo">SOFTWAREDAM</h5>
            <p class="grey-text text-lighten-4">
              Bouwen, migreren en transformeren van digitale landschappen.
            </p>
          </div>
          <div class="col l6 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#services"
                  >Diensten</a
                >
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#about-us"
                  >Over Ons</a
                >
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#careers"
                  >Carrières</a
                >
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container center-align">
          &copy; 2025 Softwaredam. Alle rechten voorbehouden.
          <a class="grey-text text-lighten-4 right" href="#!">Privacybeleid</a>
          <a class="grey-text text-lighten-4 left" href="#!"
            >Algemene voorwaarden</a
          >
        </div>
      </div>
      <div class="map-container">
        <iframe
          title="Map with location of Softwaredam"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.350258715766!2d4.511808498901193!3d52.04642467604739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c923cc1eb31b%3A0xb3d5728fa1a57c2!2sSoftwaredam!5e0!3m2!1snl!2snl!4v1752752046422!5m2!1snl!2snl/place"
          height="30"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>`

  }
}
customElements.define('super-header', SuperHeader)
customElements.define('super-footer', SuperFooter)

// voeg de volgende regels bij de nieuwe pagina's toe:
// <link link="stylesheet" href="styles.css" />
//
// 
// 