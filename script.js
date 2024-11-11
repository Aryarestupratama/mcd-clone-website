document.addEventListener("DOMContentLoaded", function () {
  const promoNavLink = document.querySelector('a[href="#promo"]');

  if (promoNavLink) {
    promoNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const promoSection = document.getElementById("promo");
      const offsetTop =
        promoSection.offsetTop - document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const promoNavLink = document.querySelector('a[href="#menu"]');

  if (promoNavLink) {
    promoNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const promoSection = document.getElementById("menu");
      const offsetTop =
        promoSection.offsetTop - document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuDropdown = document.querySelector(".menu-dropdown");
  const menuDropdownContent = document.querySelector(".menu-dropdown-content");

  menuDropdown.addEventListener("click", function () {
    if (menuDropdownContent.style.display === "block") {
      menuDropdownContent.style.display = "none";
    } else {
      menuDropdownContent.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sarapanPagiNavLink = document.querySelector('a[href="#sarapan-pagi"]');

  if (sarapanPagiNavLink) {
    sarapanPagiNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const sarapanPagiSection = document.querySelector("#sarapan-pagi"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'sarapan-pagi'
      const offsetTop =
        sarapanPagiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const dagingSapiNavLink = document.querySelector('a[href="#daging-sapi"]');

  if (dagingSapiNavLink) {
    dagingSapiNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#daging-sapi"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const ayamNavLink = document.querySelector('a[href="#ayam"]');
  if (ayamNavLink) {
    ayamNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#ayam"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const ikanNavLink = document.querySelector('a[href="#ikan"]');
  if (ayamNavLink) {
    ikanNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#ikan"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const minumanNavLink = document.querySelector('a[href="#minuman"]');
  if (minumanNavLink) {
    minumanNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#minuman"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const makananPenutupNavLink = document.querySelector(
    'a[href="#makanan-penutup"]'
  );
  if (makananPenutupNavLink) {
    makananPenutupNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#makanan-penutup"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  const feedbackNavLink = document.querySelector(
    'a[href="#feedback"]'
  );
  if (feedbackNavLink) {
    feedbackNavLink.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku default dari tautan
      const dagingSapiSection = document.querySelector("#feedback"); // Menggunakan querySelector untuk mendapatkan elemen dengan id 'daging-sapi'
      const offsetTop =
        dagingSapiSection.offsetTop -
        document.querySelector("nav").offsetHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  }

  
});

