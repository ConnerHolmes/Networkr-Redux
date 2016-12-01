//check for user events on CouchDB


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
    var liTime = document.createTextNode(events[x].time);
    newLi.appendChild(liTitle, liTime);
    var position = document.getElementById('sidebar-list');
    position.appendChild(newLi);
    user.push(events[x]);
  }
}
// $(function(){
//   $('.content-remove').on('click', function(){
//     var buttonID = this.id;
//
//     if (buttonID == 'rmChris'){
//       console.log('Chris removed');
//     }
//   });
// });


//PUT to CouchDB with 'Save' button
