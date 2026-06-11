const express = require('express');
const router = express.Router();
const { getDb } = require('../database/db_mongodb');
router.get('/', async (req, res) => {
    try{
        console.log(getDb);
        const users= await getDb().collection('Users').find({}).toArray();
        res.json(users)

    }
    catch(err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Database query failed' });

    }
})
module.exports = router;