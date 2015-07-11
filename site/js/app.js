var myApp = angular.module('myApp', []);
myApp.controller('PortfolioListController', function( $scope ) {

	$scope.portfolios = [

	{name: '0312',
	title: 'Midtown Manhattan #1',
	date: '2015-01-27',
	description: 'Midtown Manhattan with a view of the Empire State Building',
	imageurl: 'IMG_0312_small.JPG'},

	{name: '0331',
	title: 'Hoboken Train Station #1',
	date: '2015-02-08',
	description: 'The Hoboken train station in winter',
	imageurl: 'IMG_0331_small.JPG'},

	{name: '0337',
	title: 'Hoboken Train Station #2',
	date: '2015-02-16',
	description: 'The fish estuary next to the Hoboken train station in winter',
	imageurl: 'IMG_0337_small.JPG'},

	{name: '0466',
	title: 'Midtown Manhattan #2',
	date: '2015-05-08',
	description: 'Midtown Manhattan with a view of the Empire State Building at night',
	imageurl: 'IMG_0466_small.JPG'},

	{name: '0480',
	title: 'Freedom Tower #1',
	date: '2015-05-08',
	description: 'The Freedom Tower at twilight',
	imageurl: 'IMG_0480_small.JPG'},

	{name: '0493',
	title: 'Empire State Building #1',
	date: '2015-05-08',
	description: 'The Empire State Building in colors',
	imageurl: 'IMG_0493_small.JPG'},

	{name: '0509',
	title: 'Freedom Tower #2',
	date: '2015-05-08',
	description: 'The Freedom Tower at night',
	imageurl: 'IMG_0509_small.JPG'},

	{name: '0529',
	title: 'Fireworks #1',
	date: '2015-07-04',
	description: 'Macy\'s fireworks on the 4th of July',
	imageurl: 'IMG_0529_small.JPG'},

	{name: '0576',
	title: 'Fireworks #2',
	date: '2015-07-04',
	description: 'More Macy\'s fireworks on the 4th of July',
	imageurl: 'IMG_0576_small.JPG'},

	{name: '0583',
	title: 'Promenade #1',
	date: '2015-07-08',
	description: 'The promenade behind Laguna',
	imageurl: 'IMG_0583_small.JPG'},

	{name: '0590',
	title: 'Promenade #2',
	date: '2015-07-08',
	description: 'The promenade behind Laguna with a view of the Freedom Tower',
	imageurl: 'IMG_0590_small.JPG'},

	{name: '0597',
	title: 'Wildlife',
	date: '2015-07-08',
	description: 'Three Canadian Geese',
	imageurl: 'IMG_0597_small.JPG'},

	{name: '0600',
	title: 'Promenade #3',
	date: '2015-07-08',
	description: 'The promenade behind Aquablu',
	imageurl: 'IMG_0600_small.JPG'},

	{name: '0602',
	title: 'Freedom Tower #3',
	date: '2015-07-08',
	description: 'A view of the Freedom Tower from behind Aquablu at Newport',
	imageurl: 'IMG_0602_small.JPG'},

	{name: '0603',
	title: 'Midtown Manhattan',
	date: '2015-07-08',
	description: 'Midtown Manhattan with a view of the Hudson River and the Empire State Building',
	imageurl: 'IMG_0603_small.JPG'},

	{name: '0609',
	title: 'Aquablu',
	date: '2015-07-08',
	description: 'The Aquablu at Newport',
	imageurl: 'IMG_0609_small.JPG'},

	{name: '0628',
	title: 'Community Garden Flowers #1',
	date: '2015-07-08',
	description: 'Barcelona marigolds in the community garden',
	imageurl: 'IMG_0628_small.JPG'},

	{name: '0637',
	title: 'Community Garden Flowers #2',
	date: '2015-07-08',
	description: 'White lilies in the community garden',
	imageurl: 'IMG_0637_small.JPG'},

	{name: '0639',
	title: 'Community Garden Flowers #3',
	date: '2015-07-08',
	description: 'A flower bed in the community garden',
	imageurl: 'IMG_0639_small.JPG'},

	{name: '0640',
	title: 'Community Garden Flowers #4',
	date: '2015-07-08',
	description: 'A sunflower in the community garden',
	imageurl: 'IMG_0640_small.JPG'},

	{name: '0648',
	title: 'Community Garden Flowers #5',
	date: '2015-07-08',
	description: 'Hydrangea in the community garden',
	imageurl: 'IMG_0648_small.JPG'},

	{name: '0651',
	title: 'East Hampton',
	date: '2015-07-08',
	description: 'The East Hampton at Newport',
	imageurl: 'IMG_0651_small.JPG'},

	{name: '0653',
	title: 'Pacific',
	date: '2015-07-08',
	description: 'The Pacific at Newport',
	imageurl: 'IMG_0653_small.JPG'},

	{name: '0660',
	title: 'Freedom Tower #4',
	date: '2015-07-08',
	description: 'A view of the Freedom Tower from behind the East Hampton at Newport',
	imageurl: 'IMG_0660_small.JPG'},

	{name: '0665',
	title: 'Atlantic',
	date: '2015-07-08',
	description: 'The Atlantic at Newport',
	imageurl: 'IMG_0665_small.JPG'},

	{name: '0672',
	title: 'River Court',
	date: '2015-07-08',
	description: 'The three flags at River Court',
	imageurl: 'IMG_0672_small.JPG'},

	{name: '0677',
	title: 'Promenade #4',
	date: '2015-07-08',
	description: 'The promenade behind the Atlantic at Newport with a view of the Freedom Tower',
	imageurl: 'IMG_0677_small.JPG'},

	{name: '0682',
	title: 'Roses',
	date: '2015-07-08',
	description: 'A sample of the roses found behind the Atlantic at Newport',
	imageurl: 'IMG_0682_small.JPG'},

	{name: '0706',
	title: 'The Lighthouse',
	date: '2015-07-08',
	description: 'The Lighthouse behind the Atlantic at Newport',
	imageurl: 'IMG_0706_small.JPG'},

	{name: '0714',
	title: 'Riverside',
	date: '2015-07-08',
	description: 'The Riverside at Newport',
	imageurl: 'IMG_0714_small.JPG'},

	{name: '0721',
	title: 'Marina #1',
	date: '2015-07-08',
	description: 'Some boats docked at the Newport Yacht Club and Marina',
	imageurl: 'IMG_0721_small.JPG'},

	{name: '0732',
	title: 'Freedom Tower #5',
	date: '2015-07-08',
	description: 'A view of the Freedom Tower and the Newport Yacht Club and Marina',
	imageurl: 'IMG_0732_small.JPG'},

	{name: '0737',
	title: 'Marina #2',
	date: '2015-07-08',
	description: 'A big boat docked at the Newport Yacht Club and Marina',
	imageurl: 'IMG_0737_small.JPG'},

	{name: '0748',
	title: 'Town Square',
	date: '2015-07-08',
	description: 'The Town Square',
	imageurl: 'IMG_0748_small.JPG'},

	{name: '0781',
	title: 'Laguna',
	date: '2015-07-08',
	description: 'The Laguna at Newport',
	imageurl: 'IMG_0781_small.JPG'},

	{name: '0785',
	title: 'The Carousel',
	date: '2015-07-08',
	description: 'The carousel at Newport Green Park',
	imageurl: 'IMG_0785_small.JPG'},

	{name: '0802',
	title: 'Hoboken Train Station #3',
	date: '2015-mm-dd',
	description: 'The Hoboken Train Station before a rain storm',
	imageurl: 'IMG_0802_small.JPG'}

	]

	$scope.addPortfolio = function (new_portfolio) {
		$scope.portfolios.push(new_portfolio);
	};
		
});