const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----DOG PARK ROUTER------


router.get('/', (req, res) => {
  console.log('IN GET /dogParks');
  // console.log('is authenticated?', req.isAuthenticated());

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
  console.log('This is REQ.BODY', req.body);
  // console.log('is authenticated?', req.isAuthenticated());

  //post to the dog_parks table in the DB and return ID for tags
  const queryText = `
    INSERT INTO "dog_parks" ("name", "location", "description", "image_url")
    VALUES ($1, $2, $3, $4)
    RETURNING "id";
    `;

  pool.query(queryText, [req.body.name, req.body.location, req.body.description, req.body.image_url])
    .then((result) => {
      //add in a row for for the dog_park_tags table
      console.log('New Dog Park Id:', result.rows[0].id); //The new park ID is returned here

      const createdParkId = result.rows[0].id //and made into this variable

      const insertDogParkTagsQuery = `
        INSERT INTO "dog_park_tags" ("dog_park_id", "tag_id")
        VALUES  ($1, $2);
        `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertDogParkTagsQuery, [createdParkId, req.body.tag_id])
        .then(result => {
          res.send(201);
        }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });

    });
}); //end POST



//**** NOT YET TESTED */
//for ADMIN use only to edit dog parks
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const idToUpdate = req.params.id
  console.log('This is what we are Updating -->', idToUpdate);
  console.log('this is req.', req.params);
  console.log('user', req.user);

  //update the dog parks with this query AND check access level with $6
  let queryText = `UPDATE "dog_parks"
  SET "name"=$1, "location"=$2, "description" = $3, "image_url" = $4
  WHERE "id" = $5 AND $6 > 0;`;


  let values = [req.body.name, req.body.location, req.body.description, req.body.image_url, idToUpdate, req.user.access_level]
  pool.query(queryText, values)
    .then(respond => {
      res.send(200);
    }).catch(error => {
      console.log('ERROR IN UPDATE', error);
      res.sendStatus(500);
    })
}); //END PUT


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
}); //end DELETE



module.exports = router;
