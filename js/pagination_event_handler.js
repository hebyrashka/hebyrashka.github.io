function pagination_event_handler() {
  var pagination_clickable_btns = document.querySelectorAll(".pagination__btn:not(.pagination__btn--active)");
  var pagination_btns = document.getElementsByClassName("pagination")[0];

  pagination_clickable_btns.forEach(function (elem) {
    // Вешаем обработчик события "click" для кнопок пагинатора
    elem.onclick = function () {
      current_page = Number(elem.value);
      let product_table = document.querySelectorAll(".product-table tr:not(.product-table tbody tr)");

      product_table.forEach(function(elem) {
        elem.remove();
      });

      pagination_btns.innerHTML = "";

      product(current_page, limit);
    };
  });
}
