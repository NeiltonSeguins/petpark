document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".ofertas__slides");
  const prevButton = document.querySelector(".ofertas__nav--prev");
  const nextButton = document.querySelector(".ofertas__nav--next");

  let currentIndex = 0;
  const itemsToShow = 4;
  const totalItems = document.querySelectorAll(".ofertas__item").length;
  const itemWidth = document.querySelector(".ofertas__item").offsetWidth + 24; // largura do item + gap

  console.log("Item width:", itemWidth);
  console.log("Total items:", totalItems);

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= itemsToShow;
      if (currentIndex < 0) currentIndex = 0;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex += itemsToShow;
      if (currentIndex > totalItems - itemsToShow)
        currentIndex = totalItems - itemsToShow;
      updateCarousel();
    }
  });

  function updateCarousel() {
    console.log("Current index:", currentIndex);
    slides.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});
