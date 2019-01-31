var DinnerPrintoutView = function (container, model) {

    const numberOfGuests = container.find('#numberOfGuests');
    numberOfGuests.html(model.getNumberOfGuests());

    const menu = model.getFullMenu();

    const rightLeft = container.find('.rightLeft');
    
    var row = $("<div/>")  
                    .addClass("row column");

    rightLeft.append(row);

    //var dishLeft = $("<div/>")  
                    //.addClass("dishLeft column");

    //rightLeft.append(dishLeft);
    
    menu.forEach(function(dish){
        if (dish !== undefined){
            var imgName = $("<div/>")  
                    .addClass("imgName");
            row.append(imgName);
            imgName.append('<img class="printImg" src="images/' + dish.image +'"' + '/>');
            imgName.append('<p>' + dish.name + '</p>');
            imgName.append('<p class="description" >' + dish.description + '</p>');

        }
    })

    
}