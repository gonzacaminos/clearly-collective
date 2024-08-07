/**
 * imports
 */
import "./scss/main.scss";
import Alpine from "alpinejs";
import Splide from "@splidejs/splide";

window.Alpine = Alpine;

Alpine.start();

Shopify.queryParams = {};
// Preserve existing query parameters
if (location.search.length) {
  var params = location.search.substr(1).split("&");
  for (var i = 0; i < params.length; i++) {
    var keyValue = params[i].split("=");
    if (keyValue.length) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(
        keyValue[1]
      );
    }
  }
}
// Update sort_by query parameter on select change
const sort_by = document.querySelector("#sort-by");

if (sort_by) {
  sort_by.addEventListener("change", function (e) {
    var value = e.target.value;
    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });
}

const carousels = document.querySelectorAll(".splide-slider");

carousels.forEach((carousel) => {
  const data = carousel.dataset;
  new Splide(carousel, {
    perPage: data?.perPage,
    padding: {
      left: parseInt(data?.paddingLeft || 0),
      right: parseInt(data?.paddingRight || 0),
    },
    gap: data?.gap || "24px",
    pagination: false,
    breakpoints: {
      480: {
        perPage: 1,
      },
      640: {
        perPage: 1,
        padding: 10,
      },
      980: {
        perPage: 2,
      },
    },
  }).mount();
});

const vertical_carousel = document.querySelector(
  ".collection-link-blocks .splide-slider-vertical"
);

if (vertical_carousel) {
  const collection_link_block = new Splide(vertical_carousel, {
    perPage: 1,
    arrows: false,
    direction: "ttb",
    heightRatio: 1,
    speed: 500,
    focus: 0,
  }).mount();

  const collection_links = document.querySelectorAll(
    ".collection-link-blocks a.tw-group"
  );

  collection_links.forEach((collection_link) => {
    collection_link.addEventListener("mouseenter", (event) => {
      const index = parseInt(event.currentTarget.dataset?.index);
      console.log(index);
      collection_link_block.go(index);
    });
  });

  const interaction_container = document.querySelector(
    ".collection-link-blocks .interaction-container"
  );

  if (interaction_container) {
    interaction_container.addEventListener("mouseleave", (event) => {
      collection_link_block.go(0);
    });
  }
}

const how_to_wear = document.querySelector(".splide-how-to-wear");
const how_to_wear_text = document.querySelector(".splide-how-to-wear-text");

if (how_to_wear && how_to_wear_text) {
  const how_to_wear_slider = new Splide(how_to_wear, {
    perPage: 1,
    arrows: false,
    padding: { right: 50 },
    autoplay: true,
    interval: 3500,
    rewind: true,
    breakpoints: {
      989: {
        padding: 0,
      },
    },
    gap: "16px",
    speed: 1200,
  }).mount();

  const how_to_wear_text_slider = new Splide(how_to_wear_text, {
    arrows: false,
    speed: 400,
    type: "fade",
    drag: false,
    rewind: true,
  }).mount();

  how_to_wear_slider.on("move", (e) => {
    console.log(e);
    how_to_wear_text_slider.go(e);
  });
}

// new Ajaxinate({
//   container: '#AjaxinateContainer',
//   pagination: '#AjaxinatePagination',
//   loadingText: 'Loading more...',
//   method: 'click'
// });
