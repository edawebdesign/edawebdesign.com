var app = angular.module('edawebdesign');

app.controller('emailControl', function($scope, $http, $q){
  $scope.test = "test";

  $scope.sendEmail = function(){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/api/email',
      data: {email: $scope.contactEmail, text: $scope.contactText}
    }).then(function(res){
      console.log(res);
      dfd.resolve(res);
    })
    return dfd.promise;
  }
})