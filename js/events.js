//check for user events on CouchDB
var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
    //call function to show/hide elements based on value
    // for (i = 0; i < responseObject.events.length; i++){
    // }
  } else {
    //call function to generate a user object and hide all elements
  }
};

xhr.open('GET', 'http://127.0.0.1:5984/conner/36094350e1c8dcfb56ddd2c90a00010f', true);
xhr.send(null);

//create user
var user = {
  name: "Conner",
  events:[
    {'chris': false},
    {'bill': false},
    {'jony': false},
    {'robin': false}
  ]
};

//add user events
$(function(){
  $('.content-button').on('click', function(){

    var buttonID = this.id;

    if (buttonID === 'chris'){
      addEvent(0,'chris');
    } else if (buttonID === 'bill'){
      addEvent(1,'bill');
    } else if (buttonID === 'jony'){
      addEvent(2,'jony');
    } else if (buttonID === 'robin'){
      addEvent(3,'robin');
    }
  });
});

$(function(){
  $('.content-remove').on('click', function(){

    var buttonID = this.id;

    if (buttonID === 'rmChris'){
      rmEvent(0,'chris');
    } else if (buttonID === 'rmBill'){
      rmEvent(1,'bill');
    } else if (buttonID === 'rmJony'){
      rmEvent(2,'jony');
    } else if (buttonID === 'rmRobin'){
      rmEvent(3,'robin');
    }
  });
});

//show sidebar event & set value to true
function addEvent(x,name){
  user.events[x][name] = true;
  var showEl = document.getElementById(x);
  $(showEl).show();
}

//hide sidebar event & set value to false
function rmEvent(x,name){
  user.events[x][name] = false;
  var showEl = document.getElementById(x);
  $(showEl).hide();
}

//PUT to CouchDB with 'Save' button
$('.save-button').on('click', function(){
  $.ajax({
    url:"http://127.0.0.1:5984/conner",
    type:"PUT",
    data: user,
    success: function(data){
      alert('POST successful');
    }
  });
});
