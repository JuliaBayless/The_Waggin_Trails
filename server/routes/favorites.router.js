const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//--------FAVORITES ROUTER -----

//GET all favs
router.get('/',  (req, res) => {
    console.log('IN GET /favorites');
    console.log('is authenticated?', req.isAuthenticated());
  
    //grab all from favs tables
    let queryText = `
          SELECT * FROM "favorites-junction-table"
      `;
  
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }); //end GET




// POST a row to favorites table
router.post('/',  (req, res) => {
    // POST route code here
    console.log('THIS IS POST FAVORITES', req.body, req.user);
  
    //grab the tags specific to each dog park
    let queryText = `
     INSERT INTO "favorites-junction-table" ("dog_park_id", "user_id")
     VALUES  ($1, $2);
      `;
  
  
    pool.query(queryText, [req.body.dog_park_id, req.user.id])
      .then((result) => {
        res.send(result);
      }).catch((error) => {
        console.log('ERROR IN POST PARK TAGS', error);
        res.sendStatus(500);
      });
  }); //end POST



  // DELETE from fav table
  router.delete('/',  (req, res) => {
    console.log('This is what we are deleting -->', req.body);
  
    //query text to delete a tag 
    //using tag id and dog park id to delete row
    let queryText = `
      DELETE FROM "favorites-junction-table"
      WHERE "dog_park_id" = $1 AND "user_id" = $2;
    `;
  
  
    pool.query(queryText, [req.body.dog_park_id, req.user.id])
      .then(respond => {
        res.send(200);
      })
      .catch(error => {
        console.log('ERROR IN DELETE', error);
        res.sendStatus(500);
      })
  }); //end delete

  module.exports = router;
  