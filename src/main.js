/**
 * imports
 */
import "./scss/main.scss";
import Alpine from "alpinejs";

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

// new Ajaxinate({
//   container: '#AjaxinateContainer',
//   pagination: '#AjaxinatePagination',
//   loadingText: 'Loading more...',
//   method: 'click'
// });
