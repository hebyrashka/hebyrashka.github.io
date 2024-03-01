current_page = 0;

var filter_input = document.querySelectorAll(".filter__input");

filter_input.forEach(function(elem) {
    elem.oninput = function () {
        if (filter_product.value != "" && filter_price.value == "" && filter_brand.value == "") {
            filter_price.disabled = true;
            filter_brand.disabled = true;
        }
        if (filter_product.value == "" && filter_price.value != "" && filter_brand.value == "") {
            filter_product.disabled = true;
            filter_brand.disabled = true;
        }
        if (filter_product.value == "" && filter_price.value == "" && filter_brand.value != "") {
            filter_product.disabled = true;
            filter_price.disabled = true;
        }
        if (filter_product.value == "" && filter_price.value == "" && filter_brand.value == "") {
            filter_product.disabled = false;
            filter_price.disabled = false;
            filter_brand.disabled = false;
        }
    };
});