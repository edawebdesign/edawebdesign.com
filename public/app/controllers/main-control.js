var app = angular.module('edawebdesign');

app.controller('mainControl', function($scope, $http, $q){
  $scope.sendEmail = function(){
    console.log($scope.contactEmail);
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