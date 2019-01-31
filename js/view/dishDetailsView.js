var DishDetailsView = function (container, model) {
    const dish = model.getDish(1);

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');

    dishInfo.append('<p class="dishName">' + dish.name + '</p>');
    dishInfo.append('<img class="singleImage" src="images/' + dish.image +'"' + '/>');
    dishInfo.append('<p>' + dish.description  + '</p>');

    const numberOfGuests = model.getNumberOfGuests();

    dishSpecs.append('Ingredients for ' + numberOfGuests + ' people');

    dish.ingredients.forEach(function(item){
        dishSpecs.append('<tr>');
        dishSpecs.append('<td>' + item.quantity * numberOfGuests + ' '+ item.unit + '</td>');
        dishSpecs.append('<td>' + item.name + '</td>');
        dishSpecs.append('<td>' + 'SEK' + ' ' + item.price * numberOfGuests + '</td>');
        dishSpecs.append('<tr>');
    })

    

}