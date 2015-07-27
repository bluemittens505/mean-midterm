var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
    .when("/portfolios",  { 
        controller: "PortfolioListController", 
        templateUrl: "app/partials/portfoliolist.html" })
    .when("/portfolio/:portfolio_index",  { 
        controller: "PortfolioDetailController", 
        templateUrl: "app/partials/portfoliodetail.html"  })
    .when("/",  {
    	redirectTo: "/portfolios" })
    .otherwise( {
    	redirectTo: "/404_page" });
});