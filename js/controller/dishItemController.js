var DishItemController = function(item, id, app){
    item.click(function(){
        app.showDishDetails(id);
    })
}