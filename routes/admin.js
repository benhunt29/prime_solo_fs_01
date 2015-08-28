var express = require('express');
var router = express.Router();
var path = require('path');
var adminkey = 'superImportant'
/* GET home page. */
router.all('/:api?', function(req, res, next) {
    var apikey = req.params.api;

    if (apikey == adminkey){
        res.sendFile(path.join(__dirname,'../private/admin.html'));
    }else{
        res.send('Access Restricted');
    }

});

module.exports = router;
