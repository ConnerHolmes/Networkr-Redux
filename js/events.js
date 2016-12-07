//check for user events on CouchDB
var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    for (i = 0; i < responseObject.events.length; i++){
      //add events to sidebar
      var newLi = document.createElement('li');
      newLi.className = 'event-items';
      var liTitle = document.createTextNode(responseObject.events[i].title);
      newLi.appendChild(liTitle);
      var position = document.getElementById('sidebar-list');
      position.appendChild(newLi);
    }

  } else {
    //add events to sidebar
    var newLi = document.createElement('li');
    newLi.className = 'event-items';
    var liTitle = document.createTextNode('nothing to see here');
    newLi.appendChild(liTitle);
    var position = document.getElementById('sidebar-list');
    position.appendChild(newLi);
  }
};

xhr.open('GET', 'http://127.0.0.1:5984/conner/36094350e1c8dcfb56ddd2c90a00010f', true);
xhr.send(null);

//create event list
var events = [
  {
    indx: 0,
    speaker: 'Christopher Walken',
    title: 'CouchDB Walken Through',
    time: '6pm - 7pm'
  },
  {
    indx: 1,
    speaker: 'Bill Murray',
    title: 'Web Performance',
    time: '7:15pm - 8pm',
  },
  {
    indx: 2,
    speaker: 'Jony Ive',
    title: 'UI, less is always mor',
    time: '8:15pm - 9pm',
  },
  {
    indx: 3,
    speaker: 'Robin Williams',
    title: 'Being magnificent',
    time: '9:05pm - 10pm',
  }
];

//create user
var user = [];

//add user events
$(function(){
  $('.content-button').on('click', function(){

    var buttonID = this.id;

    if (buttonID === 'chris'){
      pushEvent(0);
    } else if (buttonID === 'bill'){
      pushEvent(1);
    } else if (buttonID === 'jony'){
      pushEvent(2);
    } else if (buttonID === 'robin'){
      pushEvent(3);
    }
  });
});

function pushEvent(x){
  var checkDouble = function(event) {
    return event.indx === x;
  }

  var eventCount = user.filter(checkDouble);

  if (eventCount.length > 0) {
    alert('Already attending');
  } else {
    //add events to sidebar
    var newLi = document.createElement('li');
    newLi.className = 'event-items';
    var liTitle = document.createTextNode(events[x].title);
    newLi.appendChild(liTitle);
    var position = document.getElementById('sidebar-list');
    position.appendChild(newLi);
    user.push(events[x]);
  }
}

//PUT to CouchDB with 'Save' button
// $.ajax({
//   url:"http://127.0.0.1:5984/conner/36094350e1c8dcfb56ddd2c90a00010f?callback=showEvents",
//   type: "PUT",
//   jsonp: "callback",
//   dataType: "jsonp",
//   data: user,
//   success: function(response) {
//     alert('It workerd!');
//   }
// });
