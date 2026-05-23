(function () {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.querySelector(".navbar-menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
      burger.setAttribute("aria-expanded", burger.classList.contains("is-active"));
    });
  }

  var copyButton = document.getElementById("copy-bibtex");
  var bibtexCode = document.getElementById("bibtex-code");
  var status = document.getElementById("copy-status");

  if (copyButton && bibtexCode && status) {
    copyButton.addEventListener("click", function () {
      var text = bibtexCode.textContent;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          status.textContent = "Copied";
          window.setTimeout(function () {
            status.textContent = "";
          }, 1800);
        });
      } else {
        status.textContent = "Select the BibTeX text to copy";
      }
    });
  }
}());
