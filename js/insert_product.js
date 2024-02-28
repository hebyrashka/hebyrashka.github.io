function insert_product(arr, elem) {

    var content = "";

    // Создаём HTML код для дальшейшей вставки на страницу
    arr.forEach(function(el, index) {
        let tr = document.createElement("tr");
        content += "<td>" + el.id + "</td>" + "<td>" + el.product + "</td>" + "<td>" + el.price + "</td>" + "<td>" + el.brand + "</td>";
        tr.innerHTML = content;
        content = "";
        elem.append(tr);
    });

    elem.append(content);

}