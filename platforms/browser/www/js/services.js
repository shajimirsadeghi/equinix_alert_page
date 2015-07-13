angular.module('starter.services', [])

//var alertCount = require(./backend/servr/data_retriever_server/Home_Page_Data.js);
//var companyInfo = require(./backend/servr/data_retriever_server/Company_Page.js);


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Pandora Media, Inc.',
    serial: '1694596-208vS01',
    face: 'http://www.pandora.com/img/pandora_favicon_144.png'
  }, {
    id: 1,
    name: 'Google Inc.',
    serial: '8459624-524s553',
    face: 'https://upload.wikimedia.ohacrg/wikipedia/commons/a/a0/Google_favicon_2012.jpg'
  },{
    id: 2,
    name: 'Gilead Sciences, Inc.',
    serial: '1734196-203dS02',
    face: 'http://i.forbesimg.com/media/lists/companies/gilead-sciences_416x416.jpg'
  }, {
    id: 3,
    name: 'Lithium Technologies, Inc. ',
    serial: '1548625-240vS01',
    face: 'https://pbs.twimg.com/profile_images/478636857731731456/cDxM2oQ-.png'
  }, {
    id: 4,
    name: 'Cycle 30',
    serial: '8456825-232d561',
    face: 'https://competitivecarriers.org/wp-content/uploads/2011/07/Cycle30-Logo-300x183.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
