function product(current_page, limit) {
  var total_id = new Array();

  let product_table = document.getElementsByClassName("product-table")[0];

  let get_total_id;

  current_page = 0;

  if (filter_product.value == "" && filter_price.value == "" && filter_brand.value == "") {
    get_total_id = fetch("https://api.valantis.store:41000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": token,
      },
      body: JSON.stringify({
        action: "get_ids",
        params: {
          action: "get_ids",
          params: {
            offset: 0,
          },
        },
      }),
    });
  } 
  else {
    if (filter_product.value != "" && filter_price.value == "" && filter_brand.value == "") {
      get_total_id = fetch("https://api.valantis.store:41000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": token,
        },
        body: JSON.stringify({
          action: "filter",
          params: {
            product: String(filter_product.value),
          },
        }),
      });
    }
    if (filter_product.value == "" && filter_price.value != "" && filter_brand.value == "") {
      get_total_id = fetch("https://api.valantis.store:41000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": token,
        },
        body: JSON.stringify({
          action: "filter",
          params: {
            price: Number(filter_price.value),
          },
        }),
      });
    }
    if (filter_product.value == "" && filter_price.value == "" && filter_brand.value != "") {
      get_total_id = fetch("https://api.valantis.store:41000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth": token,
        },
        body: JSON.stringify({
          action: "filter",
          params: {
            brand: String(filter_brand.value),
          },
        }),
      });
    }
  }
    get_total_id.then((get_total_id) => get_total_id.json()).then((data_get_total_id) => {
        var not_unique_total_id = Array.from(data_get_total_id.result);

        var unique_total_id = new Array();

        for (let id of not_unique_total_id) {
          if (!unique_total_id.includes(id)) {
            unique_total_id.push(id);
          }
        }

        var selected_id = new Array();

        for (let i = current_page * limit; i <= current_page * limit - 1 + limit; i++) {
          selected_id.push(unique_total_id[i]);
        }

        // Здесь сделать подсчёт страниц -->>
        //
        //

        let get_product = fetch("https://api.valantis.store:41000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": token,
          },
          body: JSON.stringify({
            action: "get_items",
            params: {
              ids: selected_id,
            },
          }),
        });
        get_product.then((get_product) => get_product.json()).then((data_get_product) => {
            var product = Array.from(data_get_product.result);

            product.forEach(function (elem, index) {
              for (let i = index + 1; i <= product.length - 1; i++) {
                if (product[index].id == product[i].id) {
                  product.splice(index, 1);
                }
              }
            });

            refresh_product = document.querySelectorAll(".product-table tr:not(.product-table tbody tr)");
            refresh_pagination = document.getElementsByClassName("pagination")[0];

            refresh_product.forEach(function (elem) {
              elem.remove();
            });
            refresh_pagination.innerHTML = "";

            product.forEach(function (el, index) {
              var content = "";

              let tr = document.createElement("tr");
              content += "<td>" + el.id + "</td>" + "<td>" + el.product + "</td>" + "<td>" + el.price + "</td>" + "<td>" + el.brand + "</td>";
              tr.innerHTML = content;
              product_table.append(tr);
            });

            pagination(unique_total_id);
            pagination_event_handler();
          });
      });
}
