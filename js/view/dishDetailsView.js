var DishDetailsView = function (container, model) {

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');

    var updates = function () {
        dishSpecs.empty();
        dishInfo.empty();
        const id = model.getDishId();
        const dish = model.getDish(id);
        const numberOfGuests = model.getNumberOfGuests();

        dishInfo.append('<p class="dishName">' + dish.name + '</p>');
        dishInfo.append('<img class="singleImage" src="images/' + dish.image + '"' + '/>');
        dishInfo.append('<p>' + dish.description + '</p>');

        dishSpecs.append('Ingredients for ' + numberOfGuests + ' people');

        dish.ingredients.forEach(function (item) {
            dishSpecs.append('<tr>');
            dishSpecs.append('<td>' + item.quantity * numberOfGuests + ' ' + item.unit + '</td>');
            dishSpecs.append('<td>' + item.name + '</td>');
            dishSpecs.append('<td>' + 'SEK' + ' ' + item.price * numberOfGuests + '</td>');
            dishSpecs.append('<tr>');
        })
    }
    updates();

    this.update = function (model, changeDetails) {
        if (changeDetails == 'dishDetailsId') {
            updates();
        }
    }

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }
    model.addObserver(this.update);
}