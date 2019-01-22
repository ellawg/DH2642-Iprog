var DishDetailsView = function (container, model) {
    const dish = model.getDish(1);
    console.log(dish.name)

    container.append('<p class="dishName">' + dish.name + '</p>');
    container.append('<img src="images/' + dish.image +'"' + '/>');

    const ingredDiv = container.find('.dishIngredients');
    const quantDiv = container.find('.dishQuantity');
    const priceDiv = container.find('.dishPrice');

    dish.ingredients.forEach(function(item){
        ingredDiv.append('<p>' + item.name + '</p>');
        quantDiv.append('<p>' + item.quantity + item.unit + '</p>');
        priceDiv.append('<p>' + item.price + 'SEK' + '</p>');
    })

    

}