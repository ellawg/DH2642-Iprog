var DishSearchView = function (container, model, app) {
    const findDish = container.find('.findDish');
    const searchTitle = container.find('.searchTitle');

    var updates = function(){
        const menu = model.getFullMenu();
        function isUndefined(foodItem){
            if (foodItem == undefined){
                return true;
            }
            else{
                return false;
            }
        }
        if (menu.every(isUndefined) == true){
            searchTitle.empty();
            searchTitle.append('<h2>Find a dish</h2>');
        }
        else{
            searchTitle.empty();
            searchTitle.append('<h2>Add another one </h2>');
        }
        
    }   
    updates();

    this.update = function (model, changeDetails) {
        if (changeDetails == 'addDishToMenu'){
            updates();
        }
    }
    
    model.addObserver(this.update);

    this.searchBtn = container.find('#searchBtn');
    this.dishList = $("<div/>").addClass("dishList");
    this.loader = $("<div/>").addClass("loader");
    container.append(this.loader);


    container.append(this.dishList);

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }
}