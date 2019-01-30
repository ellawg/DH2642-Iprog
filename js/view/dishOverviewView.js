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
    
    container.append($menuList);
    });
    container.append('<hr/> <p class="price">'+ 'Total: ' + model.getTotalMenuPrice() +  ' SEK </p>');
    container.append('<button class="button recipeBtn"> Print Full Recipe </button>')
}