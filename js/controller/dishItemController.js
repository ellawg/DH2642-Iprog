var DishItemController = function(item, id, app, model){
    const self = this;
    item.click(function(){
        app.stateController(view, app.dishDetailsView);
    })
}