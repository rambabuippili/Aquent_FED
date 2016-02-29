var helloApp = angular.module("helloApp", []);
helloApp.service("MemberService", function($http){
  return {
    getMembersData: function() {
      return $http.get("http://private-a73e-aquentuxsociety.apiary-mock.com/members");
    }
  }
});
helloApp.controller("MembersCtrl", function($scope,$http,$filter,MemberService) {
  $scope.loading = true;
   MemberService.getMembersData()
   .then(function(response) {
      $scope.loading = false;
       $scope.members = response.data;
       $scope.individualMember = response.data[0];
   });

   $scope.getMemberData = function(_id){
     $scope.individualMember = $filter('filter')($scope.members, function (d) {return d.id === _id;})[0];
     console.log($scope.individualMember);
     $scope.rowSelected = true;
   }
});
