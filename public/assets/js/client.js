var socket=io();

//get key
var input="";
var key="";
var form=$('form.login'),
passbox=form.find('input[type=text]');

form.submit(function(e){
    e.preventDefault();
    key=passbox.val().trim();
    if(key.length){

socket.emit('load',{
    key:key
});
    }
});
socket.on('access', function(data){
    if(data.access === "granted"){
        //hide key dialog
        window.alert("xoxo");
        socket.emit('input', {
            input: input,
                key: key
        });
    }});
