var DishDetailsView = function (container, model) {

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');
    const specs = container.find('.specs');


    const loader = $("<div/>").addClass("loader");
    container.append(loader);


    var updates = () => {
        dishInfo.hide();
        dishSpecs.hide();
        loader.show();
        specs.empty();
        dishInfo.empty();

        this.id = model.getDishId();

        model.getDish(this.id).then(dish => {
            dishInfo.append('<h1 class="dishName">' + dish.title + '</h1>');
            dishInfo.append('<img src="' + dish.image + '"' + '/>');
            dishInfo.append('<p>' + dish.instructions + '</p>');
            

            specs.append('Ingredients for ' + numberOfGuests + ' people');

            dish.extendedIngredients.forEach((item) => {
                specs.append('<tr>');
                specs.append('<td>' + Math.ceil(item.amount) * numberOfGuests + ' ' + item.unit + '</td>');
                specs.append('<td>' + item.name + '</td>');
                specs.append('<td>' + 'SEK' + ' ' + item.amount * numberOfGuests + '</td>');
                specs.append('<tr>');
            })
            dishInfo.show('slow');
            dishSpecs.show('slow');
            loader.hide();
        }).catch(error => {
            console.log(error);
        });

        const numberOfGuests = model.getNumberOfGuests();
    }


    this.backButton = $("<button/>").addClass("button").attr('id', 'backToSearch').html('Back to search');
    dishSpecs.append(this.backButton);
    this.addButton = $("<button/>").addClass("button").attr('id', 'addToMenu').html('Add to menu');
    dishSpecs.append(this.addButton);


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