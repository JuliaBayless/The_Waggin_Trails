const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----Router for the tags associated with a specific park------

router.get('/:parkId', rejectUnauthenticated, (req, res) => {
        console.log('IN GET /parkTags');
        parkId = req.params.parkId
        // console.log('is authenticated?', req.isAuthenticated());
      
        //grab the tags specific to each dog park
        let queryText = `
        SELECT "tag" from "tags"
        JOIN "dog_park_tags" ON "dog_park_tags".tag_id = "tags".id
        WHERE "dog_park_tags".dog_park_id = $1;
          `;


        pool.query(queryText, [parkId])
          .then((result) => {
            res.send(result.rows);
          }).catch((error) => {
            console.log('ERROR IN GET PARK TAGS', error);
            res.sendStatus(500);
          });
}); //end GET


router.post('/:parkId', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('IN GET /parkTags');
  parkId = req.params.parkId
  tagNumber = req.body.tagNumber
  // console.log('is authenticated?', req.isAuthenticated());

  //grab the tags specific to each dog park
  let queryText = `
   INSERT INTO "dog_park_tags" ("dog_park_id", "tag_id")
   VALUES  ($1, $2);
    `;


  pool.query(queryText, [parkId, tagNumber])
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      console.log('ERROR IN POST PARK TAGS', error);
      res.sendStatus(500);
    });
});

module.exports = router;
