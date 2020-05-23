const express  = require('express');
const mongoose = require('mongoose');
const CookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes/routes')
const keys = require('./config/keys');
require('./models/user');
require('./services/passport')

//CONNECTING TO MONGODB
mongoose.connect(keys.mongoURI);

//STARTING UP EXPRESS
const app = express();

// .use are middlewares ( does preprocessing of requests before sending it into route handler)

//the CookieSession extracts the data from cookie and sets it into req.session

// Another library for managing cookies is express-session -> stores session-id as reference
// to a session. It has another db for storing sessions -> session store
app.use(
    CookieSession({
        maxAge : 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
//REGISTERING ROUTES
routes(app)

//LISTENING FOR REQUESTS
const PORT = process.env.PORT || 5000;
app.listen(PORT);

