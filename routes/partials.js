var express = require('express');
var router = express.Router();

router.get('/:partial', function(req, res) {
    res.render('partials/' + req.params.partial);
});

module.exports = router;
