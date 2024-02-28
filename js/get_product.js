function get_product(offset, limit) {

    // Получаем ID товаров
    let response_get_id = fetch("https://api.valantis.store:41000/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "X-Auth": token
        },
        body: JSON.stringify({
            "action": "get_ids",
            "params": {
                "offset": offset, 
                "limit": limit
            }
        })
    });

    // Преобразуем ID товаров в карточки с полной информацией
    response_get_id.then((response_get_id) => response_get_id.json()).then((data_get_id) => {

        var array_id = Array.from(data_get_id.result);

        let response_get_product = fetch("https://api.valantis.store:41000/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "X-Auth": token
            },
            body: JSON.stringify({
                "action": "get_items",
                "params": {
                    "ids": array_id
                }
            })
        });
        response_get_product.then((response_get_product) => response_get_product.json()).then((data_get_product) => {

            var array_items = Array.from(data_get_product.result);

            array_items.forEach(function(elem, index) {
                for (let i = index + 1; i <= array_items.length - 1; i++) {
                    if (array_items[index].id == array_items[i].id) {
                        array_items.splice(index, 1);
                    }
                }
            });

            let product_table = document.getElementsByClassName("product-table")[0];

            insert_product(array_items, product_table);
            update_pagination();

            
        });
    });

}