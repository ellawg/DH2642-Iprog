var DishOverviewView = function (container, model) {

    const menu = model.getFullMenu();

    var $menuList = $("<div/>")  
                    .addClass("menuList");

    container.append($menuList);

    menu.forEach(function (j) {
        if (j !== undefined){
            new DishItemView($(".menuList"), j, model);
        }
    });
}