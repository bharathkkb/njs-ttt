var socket=io();

//get key
var input="";
socket.on('access', function(data){
    if(data.access === "granted"){
        //hide key dialog
        socket.emit('inp', function(data){
            input: input,
                key: key
        });
    }}