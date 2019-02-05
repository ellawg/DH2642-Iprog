var DishItemController = function(this, dish, app){
    this.click(function(){
        app.showDetails(dish.id)
    })

}