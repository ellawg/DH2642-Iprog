var AppController = function () {
        // VIEWS
	var sideBar = new SideBarView($(".sideBarView"), model);
	var dishSearch = new DishSearchView($(".dishSearchView"), model);
	var dishDetails = new DishDetailsView($(".dishDetailsView"), model);
	var dishOverview = new DishOverviewView($(".dishOverviewView"), model);
	var dinnerPrintout = new DinnerPrintoutView($(".dinnerPrintoutView"), model);

	// CONTROLLERS
	this.sideBarController = new SideBarController(sideBar, model, appController);
	this.dishSearchController = new DishSearchController(dishSearch, model, appController);
}

