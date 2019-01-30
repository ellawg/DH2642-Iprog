var DinnerPrintoutView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    var dishRight = $("<div/>")  
                    .addClass("dishRight");

    container.append(dishRight);

    var dishLeft = $("<div/>")  
                    .addClass("dishLeft");

    container.append(dishLeft);
    
    menu.forEach(function(dish){
        if (dish !== undefined){
            dishRight.append('<img src="images/' + dish.image +'"' + '/>');
            dishRight.append('<p>' + dish.name + '</p>');
            dishLeft.append('<p>' + dish.description + '</p>');

        }
    })

    container.append(model.getTotalMenuPrice(), ' SEK');
}