var socket = io();

//get key

var key = "";
var form = $('form.login'),
    passbox = form.find('input[type=text]');

form.submit(function (e) {

    e.preventDefault();
    key = passbox.val().trim();

    if (key.length) {

        socket.emit('load', {
            key: key
        });
    }
});
socket.on('access', function (data) {
    if (data.access === "granted") {

        if (inp != 999) {
            window.alert("Send input");
            socket.emit('inp', {
                input: inp,
                key: key
            });
        }

        socket.on('recinp', function (data) {
            var recin = data.input;
            window.alert(recin);


        });
    }
});