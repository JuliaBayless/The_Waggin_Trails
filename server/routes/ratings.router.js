const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----DOG PARK ROUTER------

router.get('/', (req, res) => {
  
}); //end GET


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
