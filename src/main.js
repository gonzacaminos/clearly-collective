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

const carousels = document.querySelectorAll( '.splide' );

carousels.forEach(carousel => {
  const data = carousel.dataset;
  new Splide( carousel, {
    perPage: data?.perPage,
    padding: { left: parseInt(data?.paddingLeft || 0) , right: parseInt(data?.paddingRight || 0) },
    gap: data?.gap || '24px',
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


// new Ajaxinate({
//   container: '#AjaxinateContainer',
//   pagination: '#AjaxinatePagination',
//   loadingText: 'Loading more...',
//   method: 'click'
// });
