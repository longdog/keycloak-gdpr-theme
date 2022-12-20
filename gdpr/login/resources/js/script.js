const MESSAGE = `This website uses cookies. We use cookies to ensure that we give you the best experience on our website to personalise content.`;

function addBanner() {
  const banner = document.createElement("div");
  banner.setAttribute("class", "cookie-banner");
  const textBlock = document.createElement("div");
  textBlock.setAttribute("class", "cookie-text");
  textBlock.appendChild(document.createElement("p")).textContent = MESSAGE;
  const acceptBlock = document.createElement("div");
  acceptBlock.setAttribute("class", "cookie-buttons");
  const button = document.createElement("button");
  button.setAttribute("class", "cookie-accept-button");
  button.textContent = "I Accept";
  acceptBlock.appendChild(button);

  banner.appendChild(textBlock);
  banner.appendChild(acceptBlock);

  document.body.appendChild(banner);

  button.addEventListener("click", removeBanner);
}
function removeBanner() {
  localStorage.setItem("accepted", "true");
  document.querySelector(".cookie-banner").setAttribute("class", "hidden");
}
function init() {
  if (!localStorage.getItem("accepted")) {
    addBanner();
  }
}
document.addEventListener("DOMContentLoaded", init);
