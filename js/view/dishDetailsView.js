var DishDetailsView = function (container, model) {

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');
    const specs = container.find('.specs');
    

    var updates = () => {
        specs.empty();
        dishInfo.empty();

        this.id = model.getDishId();
        this.dish = model.getDish(this.id);

        const numberOfGuests = model.getNumberOfGuests();

        dishInfo.append('<h1 class="dishName">' + this.dish.title + '</h1>');
        dishInfo.append('<img class="singleImage" src="images/' + this.dish.image + '"' + '/>');
        dishInfo.append('<p>' + this.dish.description + '</p>');
        

        specs.append('Ingredients for ' + numberOfGuests + ' people');

        this.dish.ingredients.forEach(function (item) {
            specs.append('<tr>');
            specs.append('<td>' + Math.ceil(item.quantity) * numberOfGuests + ' ' + item.unit + '</td>');
            specs.append('<td>' + item.title + '</td>');
            specs.append('<td>' + 'SEK' + ' ' + item.price * numberOfGuests + '</td>');
            specs.append('<tr>');
        })   
       
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