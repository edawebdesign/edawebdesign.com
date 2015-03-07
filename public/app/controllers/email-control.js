var app = angular.module('edawebdesign');

app.controller('emailControl', function($scope, emailService){
  $scope.successMessage = false;
  $scope.failureMessage = false;

  $scope.sendEmail = function(){
    emailService.postEmail($scope.contactEmail, $scope.contactText)
      .then(function(res){
        if (res.status === 200){
          $scope.failureMessage = false;
          $scope.contactEmail = "";
          $scope.contactText = "";
          $scope.successMessage = "Message sent";
        } else if (res.status === 203) {
          $scope.successMessage = false;
          $scope.failureMessage = "Message not sent. Reason: " + res.data;
        }
    })
  }
})

