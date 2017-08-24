var express = require('express');
let app = express();

app.listen(8080, 'localhost', function() {
    console.log('server listening on 8080');
});

app.use(function(req, resp) {
    resp.sendFile('/home/boghossian/devv/composer/index.html')
});