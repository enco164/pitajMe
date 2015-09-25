'use strict';

function time(timestamp) {
  var date = new Date(timestamp);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval != 0 && (interval > 1 || seconds/2592000 > 11)) {
    if (interval == 1) return interval + " year ago";
    else return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval != 0 && (interval > 1 || seconds/8640 >30)) {
    if (interval == 1) return interval + " month ago";
    else return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval != 0 && (interval > 1 || seconds/3600 > 23)) {
    if (interval == 1) return interval + " day ago";
    else return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval != 0 && (interval > 1 || seconds/60 > 59)) {
    if (interval == 1) return interval + " hour ago";
    else return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval != 0 && (interval > 1)) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}


function getDate(timestamp){
  var date = new Date(timestamp);
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  var time = day + '.' + month + '.' + year;
  return time;
}

function getWholeDate(timestamp){
  var date = new Date(timestamp);
  var minute = date.getMinutes();
  var hour = date.getHours();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  var time = day + '.' + month + '.' + year + ' at ' + hour+':'+minute;
  return time;
}
