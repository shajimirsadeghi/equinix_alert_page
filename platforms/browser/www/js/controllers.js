angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http){
  $http.get('localhost:5000/query').then(function(response){
    $scope.counter = response.data.counter;
  }, function(err){
    console.error('ERR',err);
  })


.controller('HomePageCtrl', function($scope){
  $scope.message = "Test CODE!!";
  console.log("Testing 1,2")
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

.controller('MainCtrl', function($scope)){
  $scope.counter = 
}

