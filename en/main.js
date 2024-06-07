/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 10,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
    },
  });
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
     
    },
  });
/*SHOW MORE*/

document.addEventListener("DOMContentLoaded", function() {
  const showMoreButton = document.querySelector("#rules-text .show-more");
  const rulesText = document.querySelector("#text");
  const rulesWrapper = document.querySelector(".rules-wrapper");

  showMoreButton.addEventListener("click", function() {
    if (rulesText.classList.contains("show-more-height")) {
      rulesText.classList.remove("show-more-height");
      showMoreButton.textContent = "PRIKAŽI MANJE";
    } else {
      rulesText.classList.add("show-more-height");
      showMoreButton.textContent = "PRIKAŽI VIŠE";
    }
  });
});


//language switcher

document.addEventListener("DOMContentLoaded", function () {
  var langDropdown = document.querySelector(".lang-dropdown");
  var langLink = document.getElementById("lang-link");
  var flagImg = document.querySelector(".lang-switcher img");

  // Funkcija za preusmjeravanje korisnika na stranicu odabranog jezika
  function redirectToLanguage(selectedLang) {
    // Dodajte više "else if" blokova za druge jezike i odgovarajuće URL-ove
    if (selectedLang === "en") {
      window.location.href = "./";
    } else if (selectedLang === "rs") {
      window.location.href = "../"
    }
  }

  // Funkcija za postavljanje zastave jezika na temelju lokalno pohranjenih podataka
  function setLanguageFromLocalStorage() {
    var selectedLang = localStorage.getItem("selectedLang");
    var selectedImage = langDropdown.querySelector(`[data-lang="${selectedLang}"]`).getAttribute("data-image");
    flagImg.setAttribute("src", selectedImage);

    // Dodavanje posebnog slučaja za ./TZ/index.html
    if (selectedLang === "rs") {
      flagImg.setAttribute("src", "./img/rs.png");
    }
  }

  // Provjera lokalno pohranjenih podataka i postavljanje zastave na temelju toga
  if (localStorage.getItem("selectedLang")) {
    setLanguageFromLocalStorage();
  }

  // Dodavanje "click" događaja na zastavu/link
  langLink.addEventListener("click", function (event) {
    event.preventDefault(); // Spriječavanje preusmjeravanja na #
    langDropdown.style.display = langDropdown.style.display === "block" ? "none" : "block";
  });

  // Dodavanje "click" događaja na opcije padajućeg menija
  var langOptions = langDropdown.querySelectorAll("a[data-lang]");
  langOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.preventDefault(); // Spriječavanje preusmjeravanja na #
      var selectedLang = this.getAttribute("data-lang");
      var selectedImage = this.getAttribute("data-image");

      // Ažuriranje zastave i preusmjeravanje korisnika na odabrani jezik
      flagImg.setAttribute("src", selectedImage);
      redirectToLanguage(selectedLang);

      // Spremanje odabranog jezika u localStorage
      localStorage.setItem("selectedLang", selectedLang);

      // Sakrij padajući meni nakon što je odabir završen
      langDropdown.style.display = "none";
    });
  });
});
