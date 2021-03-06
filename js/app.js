$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));

	var sideBar = new SideBarView($(".sideBarView"), model);
	var sidebarController = new SideBarController(sideBar, model);

	var dishSearch = new DishSearchView($(".dishSearchView"), model);

	var dishDetails = new DishDetailsView($(".dishDetailsView"), model);

	var dishOverview = new DishOverviewView($(".dishOverviewView"), model);

	var dinnerPrintout = new DinnerPrintoutView($(".dinnerPrintoutView"), model);



	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});