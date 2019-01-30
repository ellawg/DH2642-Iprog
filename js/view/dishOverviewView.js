var DishOverviewView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');

    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    var $menuList = $("<div/>")  
                    .addClass("menuList");

    container.append($menuList);

    menu.forEach(function (j) {
        if (j !== undefined){
            new DishItemView($(".menuList"), j, model);
        }
    });
    container.append(model.getTotalMenuPrice(), ' SEK');
}