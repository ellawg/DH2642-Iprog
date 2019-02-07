var DishSearchView = function (container, model, app) {
    const findDish = container.find('.findDish');

    findDish.append('<h2>Find a dish</h2>');
    findDish.append('<input class="input" id="searchInput" type="text" placeholder="Enter key words" value=""></input>');
    findDish.append('<form class="select"><select id="typeOption"><option value="all">All</option> <option value="starter">Starter</option><option value="main dish">Main dish</option><option value="dessert">Dessert</option></select></form><button class="button" id="searchBtn">Search</button>')

    this.searchBtn = container.find('#searchBtn');

    this.dishList = $("<div/>").addClass("dishList");

    container.append(this.dishList);

    this.showView = function () {
        container.show();
    }
    this.hideView = function () {
        container.hide();
    }
}