var DishDetailsView = function (container, model) {

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');

    var updates = () => {
        dishSpecs.empty();
        dishInfo.empty();

        this.id = model.getDishId();
        this.dish = model.getDish(this.id);

        const numberOfGuests = model.getNumberOfGuests();

        dishInfo.append('<p class="dishName">' + this.dish.name + '</p>');
        dishInfo.append('<img class="singleImage" src="images/' + this.dish.image + '"' + '/>');
        dishInfo.append('<p>' + this.dish.description + '</p>');

        dishSpecs.append('Ingredients for ' + numberOfGuests + ' people');

        this.dish.ingredients.forEach(function (item) {
            dishSpecs.append('<tr>');
            dishSpecs.append('<td>' + item.quantity * numberOfGuests + ' ' + item.unit + '</td>');
            dishSpecs.append('<td>' + item.name + '</td>');
            dishSpecs.append('<td>' + 'SEK' + ' ' + item.price * numberOfGuests + '</td>');
            dishSpecs.append('<tr>');
        })   
    }

    this.addButton = $("<button/>").addClass("button").attr('id', 'addToMenu').html('Add to menu');
    container.append(this.addButton);


    updates();

    


    this.update = function (model, changeDetails) {
        if (changeDetails == 'dishDetailsId') {
            updates();
        }
        if (changeDetails == 'numberOfGuests') {
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