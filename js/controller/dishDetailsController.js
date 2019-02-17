var DishDetailsController = function(view, model, app){
    view.addButton.on('click', function(){
        model.getDish(view.id).then(dish => {  
            model.addDishToMenu(dish);
            })
        .catch(error => {
            console.log(error);
        })
    });
    view.backButton.on('click', function(){
        app.stateController(view, app.dishSearchView);
    })
}