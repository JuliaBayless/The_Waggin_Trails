const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----RATINGS, COMMENTS and ISFAV ROUTER------

//Get all data from Ratings
router.get('/',  (req, res) => {
  console.log('IN GET /ratings');
  console.log('THIS IS PARAMS', req.params.AvgId);
  
  // console.log('is authenticated?', req.isAuthenticated());

  //grab average ratings from from dog park
  let queryText = `
    SELECT * FROM "ratings" 
    `;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET


//Get average rating 
router.get('/:AvgId',  (req, res) => {
  console.log('IN GET /ratings');
  console.log('THIS IS PARAMS', req.params.AvgId);
  
  // console.log('is authenticated?', req.isAuthenticated());

  //grab average ratings from from dog park
  let queryText = `
    SELECT avg("ratings") FROM "ratings" 
    WHERE "dog_park_id" = $1;
    `;

  pool.query(queryText, [req.params.AvgId])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET


//POST for ratings route!
router.post('/:id', (req, res) => {
 //test the incoming info!
console.log('This is REQ.PARAMS', req.params.id); 
console.log('This is REQ.BODY', req.body);
console.log('THIS IS REQ.USER', req.user);

// console.log('is authenticated?', req.isAuthenticated());

//post to the ratings table
  const queryText = `
    INSERT INTO "ratings" ("user_id", "dog_park_id", "comments", "ratings")
    VALUES ($1, $2, $3, $4);
    `;

  pool.query(queryText, [req.user.id, req.params.id, req.body.comments, req.body.ratings])
    .then((result) => {
      res.send(201);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});


router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id
  console.log('This is what we are Updating -->', idToUpdate);
  console.log('this is req.', req.params);
  console.log('user', req.user);

  //user can update their rating

  let queryText= `UPDATE "ratings"
  SET "ratings"= $1, 
  WHERE "id" = $2 AND "user_id" = 3;`;


  let values = [req.body.ratings, idToUpdate, req.user.id]
  pool.query(queryText, values)
  .then(respond => {
    res.send(200);
  }).catch(error => {
    console.log('ERROR IN UPDATE', error);
    res.sendStatus(500);
  })
  // endpoint functionality
});

//**** NOT YET TESTED */
//for ADMIN use only to delete dog parks
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const idToDelete = req.params.id
  console.log('This is what we are deleting -->', idToDelete, idUser);

  //query text to delete dog park if access_level is greater than 0
  let queryText = `
  DELETE FROM "dog_parks"
  WHERE "id" = $1 AND $2 > 0"
  `;

  pool.query(queryText, [idToDelete, req.user.access_level])
    .then(respond => {
      res.send(200);
    })
    .catch(error => {
      console.log('ERROR IN DELETE', error);
      res.sendStatus(500);
    })
  // endpoint functionality
});

module.exports = router;
