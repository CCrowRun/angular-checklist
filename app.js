
(function() {

var app = angular.module('checklist', []);

app.controller('ItemController', function(){
	this.list = items;
	this.newItem = {};
	this.addItem = function (){
		this.list.push(this.newItem);
		this.newItem = {};
	};
});

var items = [
	{
	body: 'Create checklist',
	active: true,
}, {
	body: 'Research Angular',
	active: false,

}];

})();