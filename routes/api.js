var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'pollsapp');
var PollSchema = require('../models/Poll.js').PollSchema;
var Poll = db.model('polls', PollSchema);
var express = require('express');
var router = express.Router();

router.route('/polls')
    .get(function(req, res) {
        Poll.find({}, 'question', function(err, poll) {
            if (err) {
                throw err;
            }

            return res.json(poll);
        })
    })
    .post(function(req, res) {
            var poll = req.body;
            poll.choices = poll.choices.filter(function(val) {
                return val;
            });

            new Poll(poll).save(function(err, doc) {
                if (err) {
                    throw err;
                }

                res.json(doc);
            });
        });


router.route('/polls/:id')
    .get(function(req, res) {
        Poll.findById(req.params.id, '', function(err, poll) {
            if (err) {
                throw err;
            }

            return res.json(poll);
        })
    });

module.exports = router;
