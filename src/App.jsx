var React = require('react');
var Navigator = require('./Navigator.jsx');

var Griddle = require('./Griddle/index.jsx');

//this navigation is used for configuring both the menu and the routing
var navigation = [
  { id: 1, route: 'Griddle', path: 'Griddle', display: 'Griddle', component: Griddle },
];

Navigator.setNavigation(navigation);