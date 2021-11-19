const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----RATINGS, COMMENTS and ISFAV ROUTER------

//Get all data from Ratings
router.get('/', (req, res) => {
  console.log('IN GET /ratings');
  console.log('THIS IS PARAMS', req.params.AvgId);

  // console.log('is authenticated?', req.isAuthenticated());

  //grab average ratings from from dog park
  let queryText = `
    SELECT * FROM "ratings" 
    FULL OUTER JOIN "dog_parks" ON "dog_parks".id = "ratings".dog_park_id;
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
router.get('/:AvgId', (req, res) => {
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
}); //end GET/AvgId


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
}); //end POST


router.put('/:id', (req, res) => {
  const idToUpdate = req.params.id
  console.log('This is what we are Updating -->', idToUpdate);
  console.log('user', req.user);

  //user can update their rating

  let queryText = `UPDATE "ratings"
  SET "ratings"= $1 
  WHERE "dog_park_id" = $2 AND "user_id" = $3;`;


  let values = [req.body.ratings, idToUpdate, req.user.id]
  pool.query(queryText, values)
    .then(respond => {
      res.send(200);
    }).catch(error => {
      console.log('ERROR IN UPDATE', error);
      res.sendStatus(500);
    })
}); //end PUT


//route to toggle favorite
router.put('/isFav/:id', (req, res) => {
  const idToUpdate = req.params.id
  console.log('This is what we are Updating -->', idToUpdate);
  console.log('user', req.user);

  //user can update their rating

  let queryText = `UPDATE "ratings"
  SET "isFav"= NOT "isFav" 
  WHERE "dog_park_id" = $1 AND "user_id" = $2;`;


  let values = [idToUpdate, req.user.id]
  pool.query(queryText, values)
    .then(respond => {
      res.send(200);
    }).catch(error => {
      console.log('ERROR IN UPDATE', error);
      res.sendStatus(500);
    })
}); //end PUT


module.exports = router;