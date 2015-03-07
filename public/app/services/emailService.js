var app = angular.module('edawebdesign');

app.service('emailService', function($http, $q){
  this.postEmail = function(email, text){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/api/email',
      data: {email: email, text: text}
    }).then(function(res){
      console.log(res);
      dfd.resolve(res);
    })
    return dfd.promise;
  }
})