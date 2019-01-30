var DishItemView = function (container, dish, model, showPrice) {
    var dishDiv = $("<div/>")  
                 .addClass("dish")
                 .addClass("column");

    $(container).append(dishDiv);
    dishDiv.append('<img src="images/' + dish.image +'"' + '/>');
    dishDiv.append('<p class="button" id="dishName">' + dish.name + '</p>');
    if (showPrice == true ){
        dishDiv.append(model.getTotalDishPrice(dish.id) + ' SEK');
    }

}