var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  var id = req.params.id;
  var file = path.join(__dirname, '../models/shipping.json');

  fs.readFile(file, 'utf8', function(err, data){
    if(err){
      next(err);
    } else {
      var obj = JSON.parse(data);
      var shipping = obj;

      obj.forEach(function(elem){
        if(elem.customerId == id){
          shipping = elem;
        }
      });

      res.json(shipping);
    }
  })
});

module.exports = router;

