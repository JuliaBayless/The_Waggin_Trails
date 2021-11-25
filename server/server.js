const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router.js');
const dogParkRouter = require('./routes/dogParks.router.js');
const parkTagsRouter = require('./routes/parkTags.router.js');
const ratingsRouter = require('./routes/ratings.router.js');
const tagListRouter = require('./routes/tagList.router.js')
const favoritesRouter = require('./routes/favorites.router.js')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/dogParks', dogParkRouter);
app.use('/api/parkTags', parkTagsRouter);
app.use('/api/ratings', ratingsRouter);
app.use('/api/tagList', tagListRouter);
app.use('/api/favorites', favoritesRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
