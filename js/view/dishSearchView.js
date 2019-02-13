var DishSearchView = function (container, model, app) {
    const findDish = container.find('.findDish');
    const searchTitle = container.find('.searchTitle')


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

    const findDishForm = container.find('.findDishForm');
    findDishForm.append('<input class="input" id="searchInput" type="text" placeholder="Enter key words" value=""></input>');
    findDishForm.append('<form class="select"><select id="typeOption"><option value="all">All</option> <option value="starter">Starter</option><option value="main dish">Main dish</option><option value="dessert">Dessert</option></select></form><button class="button" type"button" id="searchBtn">Search</button>')

    this.searchBtn = container.find('#searchBtn');

    this.dishList = $("<div/>").addClass("dishList");
    container.append(this.dishList);

    this.firstDishes = model.getAllDishes('all');

    this.getDishItems = list => {
        list.forEach(function (dish) {
            new DishItemView($(".dishList"), dish, model, false, app);
        });
    }

    this.typeOption = container.find( "select#typeOption" );
    this.searchInput = container.find( "input#searchInput" );

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }
}