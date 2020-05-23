const passport = require('passport');
module.exports = (app) => {
    
    app.get('/', (req, res) => {
    res.send({hi: 'there'});
    });

    // google in the code below represents the GoogleStrategy above.
    // Passport internally represents GoogleStrategy as 'google'
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
        accessType: 'offline'
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/home', (req, res) => {
        res.send(req.user);
    });
};