var DishOverviewView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');

    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    var menuList = $("<div/>")
        .addClass("menuList");

    
    container.append(menuList);

    var dishPrice = $("<div/>")
    .addClass("dishPrice")
    

    menu.forEach(function (j) {
 
        if (j !== undefined) {
            menuList.append(dishPrice)
            new DishItemView($(".dishPrice"), j, model, true);
        }
    });
    container.append('<hr/> <p class="price">' + 'Total: ' + model.getTotalMenuPrice() + ' SEK </p>');
    container.append('<button class="button recipeBtn"> Print Full Recipe </button>')
}