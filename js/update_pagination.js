function update_pagination() {
    var pagination = new Array();

    // Получаем общее количество товаров
    let pagination_fetch = fetch("https://api.valantis.store:41000/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "X-Auth": token
        },
        body: JSON.stringify({
            "action": "get_ids",
            "params": {
                "action": "get_ids",
                "params": {
                    "offset": 0
                }
            }
        })
    });
    pagination_fetch.then((pagination_fetch) => pagination_fetch.json()).then((pagination_data) => {

        var pagination_btns = document.getElementsByClassName("pagination")[0]

        total_items = Array.from(pagination_data.result);

        // Считаем общее количество страниц
        var how_pages = Math.floor(total_items.length / 50);

        for (let i = 0; i < how_pages; i++) {
            pagination.push(i + 1);
        }

        // Создаём кнопки для навигации по страница
        if (current_page == 0) {

            let current_btn = document.createElement("button");
            current_btn.className = "pagination__btn pagination__btn--active";
            current_btn.innerHTML = pagination[current_page];
            pagination_btns.append(current_btn);

            let next_btn_1 = document.createElement("button");
            next_btn_1.className = "pagination__btn";
            next_btn_1.value = pagination[current_page + 1] - 1;
            next_btn_1.innerHTML = pagination[current_page + 1];
            pagination_btns.append(next_btn_1);

            let next_btn_2 = document.createElement("button");
            next_btn_2.className = "pagination__btn";
            next_btn_2.value = pagination[current_page + 2] - 1;
            next_btn_2.innerHTML = pagination[current_page + 2];
            pagination_btns.append(next_btn_2);

        }

        if (current_page == 1) {

            let prev_btn_1 = document.createElement("button");
            prev_btn_1.className = "pagination__btn";
            prev_btn_1.value = pagination[current_page - 1] - 1;
            prev_btn_1.innerHTML = pagination[current_page - 1];
            pagination_btns.append(prev_btn_1);

            let current_btn = document.createElement("button");
            current_btn.className = "pagination__btn pagination__btn--active";
            current_btn.innerHTML = pagination[current_page];
            pagination_btns.append(current_btn);

            let next_btn_1 = document.createElement("button");
            next_btn_1.className = "pagination__btn";
            next_btn_1.value = pagination[current_page + 1] - 1;
            next_btn_1.innerHTML = pagination[current_page + 1];
            pagination_btns.append(next_btn_1);

            let next_btn_2 = document.createElement("button");
            next_btn_2.className = "pagination__btn";
            next_btn_2.value = pagination[current_page + 2] - 1;
            next_btn_2.innerHTML = pagination[current_page + 2];
            pagination_btns.append(next_btn_2);

        }

        if (current_page > 1 && current_page < pagination.length - 2) {

            let prev_btn_2 = document.createElement("button");
            prev_btn_2.className = "pagination__btn";
            prev_btn_2.value = pagination[current_page - 2] - 1;
            prev_btn_2.innerHTML = pagination[current_page - 2];
            pagination_btns.append(prev_btn_2);

            let prev_btn_1 = document.createElement("button");
            prev_btn_1.className = "pagination__btn";
            prev_btn_1.value = pagination[current_page - 1] - 1;
            prev_btn_1.innerHTML = pagination[current_page - 1];
            pagination_btns.append(prev_btn_1);

            let current_btn = document.createElement("button");
            current_btn.className = "pagination__btn pagination__btn--active";
            current_btn.innerHTML = pagination[current_page];
            pagination_btns.append(current_btn);

            let next_btn_1 = document.createElement("button");
            next_btn_1.className = "pagination__btn";
            next_btn_1.value = pagination[current_page + 1] - 1;
            next_btn_1.innerHTML = pagination[current_page + 1];
            pagination_btns.append(next_btn_1);

            let next_btn_2 = document.createElement("button");
            next_btn_2.className = "pagination__btn";
            next_btn_2.value = pagination[current_page + 2] - 1;
            next_btn_2.innerHTML = pagination[current_page + 2];
            pagination_btns.append(next_btn_2);

        }

        if (current_page == pagination.length - 1) {

            let prev_btn_2 = document.createElement("button");
            prev_btn_2.className = "pagination__btn";
            prev_btn_2.value = pagination[current_page - 2] - 1;
            prev_btn_2.innerHTML = pagination[current_page - 2];
            pagination_btns.append(prev_btn_2);

            let prev_btn_1 = document.createElement("button");
            prev_btn_1.className = "pagination__btn";
            prev_btn_1.value = pagination[current_page - 1] - 1;
            prev_btn_1.innerHTML = pagination[current_page - 1];
            pagination_btns.append(prev_btn_1);

            let current_btn = document.createElement("button");
            current_btn.className = "pagination__btn pagination__btn--active";
            current_btn.innerHTML = pagination[current_page];
            pagination_btns.append(current_btn);

        }

        if (current_page == pagination.length - 2) {

            let prev_btn_2 = document.createElement("button");
            prev_btn_2.className = "pagination__btn";
            prev_btn_2.value = pagination[current_page - 2] - 1;
            prev_btn_2.innerHTML = pagination[current_page - 2];
            pagination_btns.append(prev_btn_2);

            let prev_btn_1 = document.createElement("button");
            prev_btn_1.className = "pagination__btn";
            prev_btn_1.value = pagination[current_page - 1] - 1;
            prev_btn_1.innerHTML = pagination[current_page - 1];
            pagination_btns.append(prev_btn_1);

            let current_btn = document.createElement("button");
            current_btn.className = "pagination__btn pagination__btn--active";
            current_btn.innerHTML = pagination[current_page];
            pagination_btns.append(current_btn);

            let next_btn_1 = document.createElement("button");
            next_btn_1.className = "pagination__btn";
            next_btn_1.value = pagination[current_page + 1] - 1;
            next_btn_1.innerHTML = pagination[current_page + 1];
            pagination_btns.append(next_btn_1);

        }

        if (current_page < 3) {

            let end_btn = document.createElement("button");
            end_btn.className = "pagination__btn pagination__btn--basic_navigation";
            end_btn.value = pagination.length - 1;
            end_btn.innerHTML = "Конец";
            pagination_btns.append(end_btn);

        }

        if (current_page > pagination.length - 4) {

            let start_btn = document.createElement("button");
            start_btn.className = "pagination__btn pagination__btn--basic_navigation";
            start_btn.value = 0;
            start_btn.innerHTML = "Начало";
            pagination_btns.prepend(start_btn);

        }

        var pagination_clickable_btns = document.querySelectorAll(".pagination__btn:not(.pagination__btn--active)");

        pagination_clickable_btns.forEach(function(elem) {

            // Вешаем обработчик события клик для кнопок пагинатора
            elem.onclick = function() {

                current_page = Number(elem.value);
                let product_table = document.querySelectorAll(".product-table tr:not(.product-table tbody tr)");

                product_table.forEach(function(elem) {

                    elem.remove();

                });

                pagination_btns.innerHTML = "";

                get_product(offset, limit, token);
                console.log(pagination[current_page + 2]);

            }

        });
    });
}