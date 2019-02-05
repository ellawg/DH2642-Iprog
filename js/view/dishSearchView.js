var DishSearchView = function (container, model, app) {
    const findDish = container.find('.findDish');

    findDish.append('<h2>Find a dish</h2>');
    findDish.append('<input class="input" id="searchInput" type="text" placeholder="Enter key words" value=""></input>');
    findDish.append('<form class="select"><select id="typeOption"><option value="all">All</option> <option value="starter">Starter</option><option value="main dish">Main dish</option><option value="dessert">Dessert</option></select></form><button class="button" id="searchBtn">Search</button>')

    const searchBtn = container.find('#searchBtn');

    var dishList = $("<div/>")
        .addClass("dishList");

    container.append(dishList);

    searchBtn.on('click', function () {
        dishList.empty();
        const typeVal = document.getElementById('typeOption').value;
        const inputVal = document.getElementById('searchInput').value;
        console.log(inputVal);
        const dishes = model.getAllDishes(typeVal, inputVal);
        if (dishes.length == 0) {
            dishList.append('<p>Could not find any dishes</p>')
        }
        dishes.forEach(function (j) {
            new DishItemView($(".dishList"), j, model, false, app);
        });
    })




    //const dishes = model.getEveryDish();






}