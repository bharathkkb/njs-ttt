var express = require('express');
app= express();
var port = process.env.PORT || 8080;
var io=require('socket.io').listen(app.listen(port));
app.use(express.static(__dirname+'/public'));
var pass= ' xxx';
var tic=io.on('connection',function(socket){
	socket.on('load',function(data){
     socket.emit('access',{
     	access:(data.key === pass ? "granted":"denied")
     });
		

});
    
    socket.on('inp',function(data){
        if(data.key===pass){
            tic.emit('newinp',{
                input: data.input
            });
        }
    });
});

