var DinnerPrintoutView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    const rightLeft = container.find('.rightLeft');
    
    var dishRight = $("<div/>")  
                    .addClass("dishRight");

    rightLeft.append(dishRight);

    var dishLeft = $("<div/>")  
                    .addClass("dishLeft");

    rightLeft.append(dishLeft);
    
    menu.forEach(function(dish){
        if (dish !== undefined){
            var imgName = $("<div/>")  
                    .addClass("imgName");
            dishRight.append(imgName);
            imgName.append('<img src="images/' + dish.image +'"' + '/>');
            imgName.append('<p>' + dish.name + '</p>');
            dishLeft.append('<p>' + dish.description + '</p>');

        }
    })

    
}