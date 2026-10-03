// grab all four dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

// when one opens, close the others so the page stays tidy
dropdowns.forEach(function (clicked) {
  clicked.addEventListener("toggle", function () {
    // ignore the toggle if it was just closing
    if (!clicked.open) return;

    dropdowns.forEach(function (other) {
      if (other !== clicked) other.open = false;
    });
  });
});

// grab the popup, the big image, and the caption inside it
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

// clicking any gallery or carousel picture opens it full size
document.querySelectorAll(".gallery img, .carousel img").forEach(function (pic) {
  pic.addEventListener("click", function () {
    lightboxImg.src = pic.src;
    lightboxImg.alt = pic.alt;
    lightboxCaption.textContent = pic.alt;   // show the alt text as a caption
    lightbox.showModal();   // also lets Escape close it for free
  });
});

// wire up the arrow buttons on each carousel
document.querySelectorAll(".carousel").forEach(function (carousel) {
  const track = carousel.querySelector(".carousel-track");
  const gap = 10;   // matches the gap in the css

  // scroll one picture to the left
  carousel.querySelector(".prev").addEventListener("click", function () {
    track.scrollBy({ left: -(track.clientWidth + gap) });
  });

  // scroll one picture to the right
  carousel.querySelector(".next").addEventListener("click", function () {
    track.scrollBy({ left: track.clientWidth + gap });
  });
});

// clicking the big picture (or the dark area) closes it
lightbox.addEventListener("click", function () {
  lightbox.close();
});

// put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
