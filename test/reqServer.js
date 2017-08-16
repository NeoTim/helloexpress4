var request = require("request");

request.post({
    url:    'http://localhost:1337/login',
    form:{
        username:   'xiaodong',
        password:   'pass123'
    }
},function(err,resp,body){
    console.log('-=-=-=',err,body);
    var token = 'Bearer ' + JSON.parse(body);
    console.log('token ',token);

    request.post({
        url:    'http://localhost:1337/token',
        headers:{
            authorization:  token
        }
    },function(err1,resp1,body1){
        console.log('<><><><><>',err1,body1);
    });
});