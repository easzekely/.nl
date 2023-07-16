(() => {
  const ctaButton = document.querySelector(".cta-button");
  const productForm = document.getElementById("product-form");
  const imageSlider = document.querySelector(".image-slider");
  const productShowcase = document.querySelector(".product-showcase");

  // Add hover effect to CTA button
  ctaButton.addEventListener("mouseenter", () => {
    ctaButton.style.backgroundColor = "#5aa58d";
  });

  ctaButton.addEventListener("mouseleave", () => {
    ctaButton.style.backgroundColor = "#8db596";
  });

  // Smooth scrolling to the anchor on button click
  ctaButton.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector("#product-details");
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });

  // Form validation
  productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return;
    }

    // Form submission logic goes here
    // ...
    alert("Form submitted successfully!");
    productForm.reset();
  });

  // Image slider
  let currentImageIndex = 0;
  const images = imageSlider.querySelectorAll("img");

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  setInterval(changeImage, 3000);

  // Interactive product showcase
  productShowcase.addEventListener("click", (event) => {
    const listItem = event.target;

    if (listItem.nodeName === "LI") {
      listItem.classList.toggle("selected");
    }
  });
})();
