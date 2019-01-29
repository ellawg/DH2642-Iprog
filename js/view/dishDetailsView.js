var DishDetailsView = function (container, model) {
    const dish = model.getDish(1);

    const dishInfo = container.find('.dishInfo');
    const dishSpecs = container.find('.dishSpecs');

    dishInfo.append('<p class="dishName">' + dish.name + '</p>');
    dishInfo.append('<img class="singleImage" src="images/' + dish.image +'"' + '/>');
    dishInfo.append('<p>' + dish.description  + '</p>');


    dish.ingredients.forEach(function(item){
        dishSpecs.append('<tr>');
        dishSpecs.append('<td>' + item.name + '</td>');
        dishSpecs.append('<td>' + item.quantity + item.unit + '</td>');
        dishSpecs.append('<td>' + 'SEK' + ' ' + item.price + '</td>');
        dishSpecs.append('<tr>');
    })

    

}