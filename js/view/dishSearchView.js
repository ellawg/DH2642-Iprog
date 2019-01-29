var DishSearchView = function (container, model) {
    
    const dishes = model.getEveryDish();

    var $dishList = $("<div/>")  
                 .addClass("dishList");

    container.append($dishList);
    
    dishes.forEach(function (j) {
        new DishItemView($(".dishList"),j, model);
    });
}