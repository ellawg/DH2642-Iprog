var DishItemController = function(item, app, dishId, model){
    item.click(function(){
        model.setDishId(dishId);
        app.stateController(app.dishSearchView, app.dishDetailsView);
    })
}