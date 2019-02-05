var DishItemView = function (container, dish, model, showPrice) {
    new DishItemController(this, dish, app);
    var dishDiv = $("<div/>")  
                 .addClass("dish")
                 .addClass("column box");
                 
                 

    $(container).append(dishDiv);
    dishDiv.append('<img src="images/' + dish.image +'"' + '/>');
    dishDiv.append('<a class="dishName">' + dish.name + '</a>');
    if (showPrice == true ){
        dishDiv.append('<p class="itemPrice">' + model.getTotalDishPrice(dish.id) + ' SEK</p>');
    }

}