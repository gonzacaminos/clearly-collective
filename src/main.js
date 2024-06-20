/**
 * imports
 */
import "./scss/main.scss";
import Alpine from "alpinejs";
import Splide from '@splidejs/splide';

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

const carousels = document.querySelectorAll( '.splide-slider' );

carousels.forEach(carousel => {
  const data = carousel.dataset;
  new Splide( carousel, {
    perPage: data?.perPage,
    padding: { left: parseInt(data?.paddingLeft || 0) , right: parseInt(data?.paddingRight || 0) },
    gap: data?.gap || '24px',
    pagination: false,
    breakpoints: {
      480: {
        perPage: 1,
      },
      640: {
        perPage: 1,
        padding: 10
      },
      980: {
        perPage: 2
      }
    }
  }).mount();
});



const vertical_carousel = document.querySelector( '.collection-link-blocks .splide-slider-vertical' );

if(vertical_carousel){
  const collection_link_block = new Splide( vertical_carousel, {
    perPage: 1,
    arrows: false,
    direction: 'ttb',
    heightRatio: 1,
    speed: 600
  }).mount();
  
  const collection_links = document.querySelectorAll('.collection-link-blocks a.tw-group');
  
  collection_links.forEach(collection_link => {
    collection_link.addEventListener("mouseenter", (event) => {
      const index = parseInt(event.currentTarget.dataset?.index);
      console.log(index)
      collection_link_block.go(index)
    });
  });

  const interaction_container = document.querySelector( '.collection-link-blocks .interaction-container' );

  if(interaction_container){
    interaction_container.addEventListener("mouseleave", (event) => {
      collection_link_block.go(0)
    });
  }
}

// new Ajaxinate({
//   container: '#AjaxinateContainer',
//   pagination: '#AjaxinatePagination',
//   loadingText: 'Loading more...',
//   method: 'click'
// });
