var DishItemView = function (container, dish, model, showPrice, app) {
    
    var dishDiv = $("<div/>")  
                 .addClass("dish")
                 .addClass("column box");

    container.append(dishDiv);
    dishDiv.append('<img src="images/' + dish.image +'"' + '/>');
    dishDiv.append('<a class="dishName">' + dish.name + '</a>');
    if (showPrice == true ){
        dishDiv.append('<p class="itemPrice">' + model.getTotalDishPrice(dish.id) + ' SEK</p>');
    }
    new DishItemController(dishDiv, app, dish.id, model);

}