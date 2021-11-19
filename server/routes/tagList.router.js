const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//-----TAGS LIST ROUTER------

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('IN GET /tagList');
  console.log('is authenticated?', req.isAuthenticated());

  //grab the info from tags
  let queryText = `
        SELECT * FROM "tags"
    `;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); //end GET



//****** HAVENT BUILT YET */
//Add a tag to the Tags list for admin *stretch goal
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('IN POST /tagList', req.user.access_level, req.body);
  console.log('is authenticated?', req.isAuthenticated());

  //grab the tags specific to each dog park
  if (req.user.access_level > 0) {
  let queryText = `
   INSERT INTO "tags" ("tag")
   VALUES  ($1)
    `; 
  pool.query(queryText, [req.body.tag])
    .then((result) => {
      res.send(result);
    }).catch((error) => {
      console.log('ERROR IN POST PARK TAGS', error);
      res.sendStatus(500);
    });
  } else {
    alert('Not authorized to add tag, please message administrator')
  }
});

module.exports = router;
