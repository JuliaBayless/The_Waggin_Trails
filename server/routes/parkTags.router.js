const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----Router for the tags associated with a specific park------

//Get all the tags specific to the parks
router.get('/',  (req, res) => {
        console.log('IN GET /parkTags');
        // console.log('is authenticated?', req.isAuthenticated());
      
        //grab the tags specific to each dog park
        let queryText = `
        SELECT * from "tags"
        JOIN "dog_park_tags" ON "dog_park_tags".tag_id = "tags".id;
          `;


        pool.query(queryText)
          .then((result) => {
            res.send(result.rows);
          }).catch((error) => {
            console.log('ERROR IN GET PARK TAGS', error);
            res.sendStatus(500);
          });
}); //end GET


router.post('/:parkId', (req, res) => {
  // POST route code here
  console.log('IN GET /parkTags');
  console.log(req.params.parkId, req.body.tagNumber);
  
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
}); //end POST


//*
router.delete('/', (req, res) => {
  console.log('This is what we are deleting -->', req.body);

  //query text to delete a tag 
  //using tag id and dog park id to delete row
  let queryText = `
    DELETE FROM "dog_park_tags"
    WHERE "dog_park_id" = $1 AND "tag_id" = $2;
  `;


  pool.query(queryText, [req.body.dog_park_id, req.body.tag_id])
    .then(respond => {
      res.send(200);
    })
    .catch(error => {
      console.log('ERROR IN DELETE', error);
      res.sendStatus(500);
    })
}); //end delete
module.exports = router;
