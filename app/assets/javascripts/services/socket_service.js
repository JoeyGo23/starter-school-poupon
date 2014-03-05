poupon.factory('Socket', function () {
  var pusher = new Pusher(''); /* Insert your Pusher app id here */
  var channel = pusher.subscribe('poupon');

  return channel;
});