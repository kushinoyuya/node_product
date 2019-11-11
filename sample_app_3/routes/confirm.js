var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/confirms', function(req, res, next) {
    res.render('confirm', { title: 'Express' });
});


module.exports = router;
