var router = require('express').Router();
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// api here

router.get('/api/v6/read', do_read);
router.post('/api/v6/create', do_create);
router.put('/api/v6/update', do_update);
router.delete('/api/v6/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('');
}