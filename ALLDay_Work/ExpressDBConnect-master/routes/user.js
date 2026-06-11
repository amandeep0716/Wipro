const express = require('express');
const router = express.Router();
const db = require('../database/db_mysql');
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if(err) {
            res.status(500).json({ error: 'Database query failed' });
        }
        else {
            res.json(results);
        }
})
});
module.exports = router;