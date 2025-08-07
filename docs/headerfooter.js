// Fetch the external header.html template and define the custom element
fetch('/docs/components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    class SuperHeader extends HTMLElement {
      connectedCallback() {
        const template = document.getElementById('header-template');
        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
      }
    }

    customElements.define('super-header', SuperHeader);
  });

fetch('/docs/components/footer.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
   
    class SuperFooter extends HTMLElement{
      connectedCallback() {
        const template = document.getElementById('footer-template');
        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
      }
    }
    customElements.define('super-footer', SuperFooter);
  });