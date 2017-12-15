console.log('loaded frontend app');

var frontend_app = angular.module('employees', ['ngRoute']);

frontend_app.config(function ($routeProvider) {
  console.log('doing route provider');
  $routeProvider
    .when("/", {
      templateUrl: "partials/main.html",
      controller: 'all_employees'
    })
    .when("/employee/:_id", {
      templateUrl: "partials/single_employee.html",
      controller: 'single_employee'
    });
});

frontend_app.controller('all_employees', do_all_employees);
frontend_app.controller('single_employee', do_single_employee);

function do_all_employees($scope, $http) {
  console.log('doing all employees');
  $scope.read = function () {
    console.log('reading all records');
    $http.get('/api/v6/read')
      .then(function (results) {
        console.log(results);
        $scope.employees = results.data;
      });
  }
  $scope.read();
}

function do_single_employee($scope, $http, $routeParams) {
  console.log($routeParams);
  console.log('doing single employee');
  $scope.read = function () {
    console.log('reading single employee');
    // $http.get('/api/v6/read/'+ $routeParams._id)
    //   .then(function (result) {
    //     $scope.single_employee = results.data;
    //     console.log($scope.single_employee);
    //   });
  }
  $scope.read();

  $scope.get_record = function (employee) {
    alert(employee);
  }
}