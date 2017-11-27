console.log('loaded frontend app');

var frontend_app = angular.module('employees',[]);
frontend_app.controller('all_employees', do_all_employees);frontend_app.controller('single_employees', do_all_employees);