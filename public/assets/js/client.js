var socket=io();

//get key
var input="";
var key='xxx';

socket.emit('load',{
    key:key
});
socket.on('access', function(data){
    if(data.access === "granted"){
        //hide key dialog
        window.alert("hi");
        socket.emit('input', {
            input: input,
                key: key
        });
    }});
