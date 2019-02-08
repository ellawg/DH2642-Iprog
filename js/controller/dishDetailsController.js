var DishDetailsController = function(view, model, app){
    view.addButton.on('click', function(){
        model.addDishToMenu(view.id);
    })
    view.backButton.on('click', function(){
        app.stateController(view, app.dishSearchView);
    })
}