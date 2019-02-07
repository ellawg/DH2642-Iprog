var DishDetailsController = function(view, model){
    view.addButton.on('click', function(){
        model.addDishToMenu(view.id);
    })
}