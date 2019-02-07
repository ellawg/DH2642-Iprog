var DishItemController = function(view, item, app, dishId, model){
    item.click(function(){
        model.setDishId(dishId);
        app.stateController(view, app.dishDetailsView);
    })
}