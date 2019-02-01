const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '704702',
    key: '838a15832db40f8cf827',
    secret: 'f6e2b49238c4e0d32a0d',
    cluster: 'ap1',
    encrypted: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});


router.post('/', (req, res) =>{
    pusher.trigger('os-poll', 'os-vote', { // using Tutorial variables
        points: 1,
        os: req.body.os
    });

    return res.json({success: true, message: 'Thank you for voting'});
});
module.exports = router;