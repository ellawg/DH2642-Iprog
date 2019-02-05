var DishItemController = function(item, id, app, model){
    const self = this;
    item.click(function(){
        model.setDishId(id);
        app.initCtrl(self, app.dishDetailsController)
    })
}