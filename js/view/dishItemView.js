var DishItemView = function (view, container, dish, model, showPrice, app) {
    
    var dishDiv = $("<div/>")  
                 .addClass("dish")
                 .addClass("column box");

    container.append(dishDiv);
    dishDiv.append('<img src="https://spoonacular.com/recipeImages/' + dish.image +'"' + '/>');
    dishDiv.append('<a class="dishName">' + dish.title + '</a>');
    if (showPrice == true ){
        dishDiv.append('<p class="itemPrice">' + model.getTotalDishPrice(dish) + ' SEK</p>');
    }
    new DishItemController(view, dishDiv, app, dish.id, model);

}