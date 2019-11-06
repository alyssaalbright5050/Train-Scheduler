$(document).ready(function() {

   
    var firebaseConfig = {
    apiKey: "AIzaSyDRxgL6LPEHG8vQtXWCvN4aNYoZTjfXYSg",
    authDomain: "train-scheduler-6b70c.firebaseapp.com",
    databaseURL: "https://train-scheduler-6b70c.firebaseio.com",
    projectId: "train-scheduler-6b70c",
    storageBucket: "train-scheduler-6b70c.appspot.com",
    messagingSenderId: "1038556769243",
    appId: "1:1038556769243:web:5d38da4bf194ede7bf55fe",
    measurementId: "G-NJ42Z8W5RQ"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var time = new Date();
  $('#currentTime').text('Current Time: ' + time);

  var trainName = '';
  var destination = '';
  var trainTime = '';
  var frequency = '';
  
  $("#submitinfo").on('click', function(event){
      event.preventDefault();

      $("#trainName").val().trim();
      $("#destination").val().trim();
      $("#trainTime").val().trim();
      $("#frequency").val().trim();

      database.ref().push( {
          trainName: trainName,
          destination: destination,
          trainTime: trainTime,
          frequency: frequency,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
  })










}