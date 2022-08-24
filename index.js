cards = [
    {
        name: "Name",
        price: 100,
        description: "Description of the product",
        views: 1000,
        company: "Company Name",
    },
    {
        name: "Eman",
        price: 200,
        description: "Product description",
        views: 100,
        company: "Name of Company",
    },
    {
        name: "Name",
        price: 150,
        description: "Description of the product",
        views: 1300,
        company: "Company Name",
    },
    {
        name: "Eman",
        price: 250,
        description: "Product description",
        views: 720,
        company: "Name of Company",
    },
    {
        name: "Name",
        price: 400,
        description: "Description of the product",
        views: 1030,
        company: "Company Name",
    },
    {
        name: "Eman",
        price: 500,
        description: "Product description",
        views: 750,
        company: "Name of Company",
    },
    {
        name: "Name",
        price: 340,
        description: "Description of the product",
        views: 4000,
        company: "Company Name",
    },
    {
        name: "Eman",
        price: 260,
        description: "Product description",
        views: 7000,
        company: "Name of Company",
    },
    {
        name: "Name",
        price: 104,
        description: "Description of the product",
        views: 10030,
        company: "Company Name",
    },
    {
        name: "Eman",
        price: 430,
        description: "Product description",
        views: 7300,
        company: "Name of Company",
    },
];

let field;
function sort(a, b) {
    if (decrease) {
        return a[field] > b[field] ? -1 : 1;
    } else {
        return a[field] < b[field] ? -1 : 1;
    }
}
function pagination(list, numpage) {
    let end = numpage * 10; // 1 page: 10
    console.log(end);
    let start = numpage * 10 - 10; // 1 page: 0
    let page = [];
    for (i = 0; i <= end; i++) {
        page.push(list[start + i]);
    }
    return page;
}
function render(list) {
    $(".row").empty();
    for (i of list) {
        $(".row").append(`<div class="col s4">
                            <div class="card horizontal">
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <h3>${i.name}</h3>
                                        <p><strong>${i.price}</strong><br>${i.company}<br>views: ${i.views}<br>${i.description}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="#">Купить</a>
                                    </div>
                                </div>
                            </div>
                        </div>`);
    }
}

$("#update").click(function () {
    let cardsCopy = JSON.parse(JSON.stringify(cards));
    field = $("#changefield").val();
    if ($("#changedec").val() == "enc") {
        decrease = false;
    } else {
        decrease = true;
    }
    cardsCopy.sort(sort);
    let page = pagination(cardsCopy, Number($("#numpage").val()));
    render(page);
});
