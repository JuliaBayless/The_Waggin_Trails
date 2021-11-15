const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----DOG PARK ROUTER------

router.get('/', (req, res) => {
  console.log('IN GET /dogParks');
  
  //grab the info from dog_parks
  let queryText = `
        SELECT * FROM "dog_parks"
    `;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
}); //end GET


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
