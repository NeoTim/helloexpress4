var request = require("request");

request.post({
    url:    'http://localhost:1337/login',
    form:{
        username:   'xiaodong',
        password:   'pass123'
    }
},function(err,resp,body){
    var token = 'Bearer ' + JSON.parse(body);
    console.log('token -->>',token);

    //post method
    request.post({
        url:    'http://localhost:1337/token',
        headers:{
            authorization:  token
        }
    },function(err1,resp1,body1){
        console.log('token response ',err1,body1);
    });

    //get method
    request.get('http://localhost:1337/',{token:token},function(err,resp,body){
        console.log('index response ',err,body);
    });
});