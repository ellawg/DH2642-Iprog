var DishDetailsView = function (container, model) {
    const dish = model.getDish(1);
    console.log(dish.name)

    const styleDiv = container.find('.imageName');

    styleDiv.append('<p class="dishName1">' + dish.name + '</p>');
    styleDiv.append('<img class="singleImage" src="images/' + dish.image +'"' + '/>');
    styleDiv.append('<p>' + dish.description  + '</p>');
    
    
    const ingredDiv = container.find('.dishIngredients');
    const quantDiv = container.find('.dishQuantity');
    const priceDiv = container.find('.dishPrice');

    dish.ingredients.forEach(function(item){
        ingredDiv.append('<p>' + item.name + '</p>');
        quantDiv.append('<p>' + item.quantity + item.unit + '</p>');
        priceDiv.append('<p>' + 'SEK' + ' ' + item.price + '</p>');
       
    })

    

}