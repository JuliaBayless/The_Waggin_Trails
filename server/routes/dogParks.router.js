const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----DOG PARK ROUTER------


//GET ALL DOG PARKS
router.get('/', (req, res) => {
  console.log('IN GET /ratings');
  console.log('THIS IS PARAMS', req.params.AvgId);

  // console.log('is authenticated?', req.isAuthenticated());

  //grab ALL dog parks
  let queryText = `
    SELECT * FROM "dog_parks";
    `;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET


//GET favorite dog parks for the user
router.get('/favoriteDP', (req, res) => {
  console.log('IN GET /dogParks');
  // console.log('is authenticated?', req.isAuthenticated());

  //grab the info from dog_parks
  let queryText = `
      SELECT * FROM "ratings" 
      FULL OUTER JOIN "dog_parks" ON "dog_parks".id = "ratings".dog_park_id
      WHERE "ratings".user_id = $1;
      `;


  pool.query(queryText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET


//GET specific dog park
router.get('/:id', (req, res) => {
  console.log('IN GET /dogParks/:id', req.params.id);
  // console.log('is authenticated?', req.isAuthenticated());

  //grab the info from the dog_park
  let queryText = `
      SELECT * FROM "dog_parks"
      FULL OUTER JOIN "ratings" ON "dog_parks".id = "ratings".dog_park_id
      WHERE "dog_parks".id  = $1;
      `;


  pool.query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET


router.post('/', (req, res) => {
  // POST route code here
  console.log('This is REQ.BODY', req.body, req.body.tag_id, 'THIS IS REQ.USER', req.user.id);
  // console.log('is authenticated?', req.isAuthenticated());

  //post to the dog_parks table in the DB and return ID for tags
  const queryText = `
      INSERT INTO "dog_parks"("name", "location", "description", "image_url")
      VALUES($1, $2, $3, $4)
      RETURNING "id";
      `;

  pool.query(queryText, [req.body.name, req.body.location, req.body.description, req.body.image_url])
    .then((result) => {
      //add in a row for for the dog_park_tags table
      console.log('New Dog Park Id:', result.rows[0].id); //The new park ID is returned here

      const createdParkId = result.rows[0].id //ID is made into this variable

      let insertDogParkTagsQuery = `
        INSERT INTO "dog_park_tags"("dog_park_id", "tag_id")
        VALUES($1, $2)
         `
      //loop for every new    
      for (let i = 1; i < req.body.tag_id.length; i++) {
        insertDogParkTagsQuery += `, ($1, $${i + 2})`;
      }

      // SECOND QUERY ADDS TAGS FOR NEW DOG PARK
      pool.query(insertDogParkTagsQuery, [createdParkId, ...req.body.tag_id])
        .then(result => {

          let insertRatingsQuery = `
          INSERT INTO "ratings" ("user_id", "dog_park_id", "ratings")
          VALUES($1, $2, $3)
           `
          let ratings = 1;

          //THIRD QUERY ADDS RATINGS ROW 
          pool.query(insertRatingsQuery, [req.user.id, createdParkId, ratings])
            .then(result => {

              res.sendStatus(201);
            })
        }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
}); //end POST




//for ADMIN use only to edit dog parks
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const idToUpdate = req.params.id
  console.log('This is what we are Updating -->', idToUpdate);
  console.log('this is req.', req.params);
  console.log('user', req.user);

  //update the dog parks with this query AND check access level with $6
  let queryText = `
      UPDATE "dog_parks"
      SET "name" = $1, "location" = $2, "description" = $3, "image_url" = $4
      WHERE "id" = $5 AND $6 > 0; `;


  let values = [req.body.name, req.body.location, req.body.description,
  req.body.image_url, idToUpdate, req.user.access_level]
  pool.query(queryText, values)
    .then(respond => {
      res.sendStatus(200);
    }).catch(error => {
      console.log('ERROR IN UPDATE', error);
      res.sendStatus(500);
    })
}); //END PUT



//for ADMIN use only to delete dog parks
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const idToDelete = req.params.id
  console.log('This is what we are deleting -->', idToDelete, req.user.access_level);

  let queryDogParkTags = `
  DELETE FROM "dog_park_tags"
  WHERE "dog_park_id" = $1 AND $2 > 0
  `

  pool.query(queryDogParkTags, [idToDelete, req.user.access_level])
    .then(respond => {

      //SECOND QUERY TO delete dog park if access_level is greater than 0
      let queryRatingsText = `
          DELETE FROM "ratings"
          WHERE "dog_park_id" = $1 AND $2 > 0;`


      pool.query(queryRatingsText, [idToDelete, req.user.access_level])
        .then(respond => {

          let queryText = `
          DELETE FROM "dog_parks"
          WHERE "id" = $1 AND $2 > 0
          `;
    
          pool.query(queryText, [idToDelete, req.user.access_level])
            .then(respond => {
              res.sendStatus(200);
            })
            .catch(error => {
              console.log('ERROR IN DELETE from dog park table', error);
              res.sendStatus(500);
            })
        })
        .catch(error => {
          console.log('ERROR IN DELETE from ratings table', error);
          res.sendStatus(500);
        })
    })
    .catch(error => {
      console.log('ERROR IN DELETE from junction table', error);
      res.sendStatus(500);

    });

}) //end DELETE

module.exports = router;
