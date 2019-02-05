var DishSearchView = function (container, model, app) {
    const findDish = container.find('.findDish');

    findDish.append('<h2>Find a dish</h2>');
    findDish.append('<input class="input" id="searchInput" type="text" placeholder="Enter key words"></input>');
    findDish.append(' <div class="select"><select><option>All</option> <option>Starter</option><option>Main dish</option><option>Dessert</option></select></div><a class="button" id="searchBtn">Search</a>')

    const dishes = model.getEveryDish();

    var dishList = $("<div/>")  
                    .addClass("dishList");

    container.append(dishList);
    
    dishes.forEach(function (j) {
        new DishItemView($(".dishList"),j, model, false, app);
    });
}