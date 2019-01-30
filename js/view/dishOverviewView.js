var DishOverviewView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');

    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    var menuList = $("<div/>")
        .addClass("menuList");

    var overView = $("<div/>")
        .addClass("overView");
    menuList.append(overView);

    container.append(menuList);

    menu.forEach(function (j) {
        if (j !== undefined) {

            new DishItemView($(".overView"), j, model);
            var dishPrice = $("<div/>")
                .addClass("dishPrice")
            overView.append(dishPrice)
            dishPrice.append(model.getTotalDishPrice(j.id) + ' SEK');
        }

        container.append(menuList);
    });
    container.append('<hr/> <p class="price">' + 'Total: ' + model.getTotalMenuPrice() + ' SEK </p>');
    container.append('<button class="button recipeBtn"> Print Full Recipe </button>')
}