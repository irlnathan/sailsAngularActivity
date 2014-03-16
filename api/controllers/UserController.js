/**
 * UserController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	create: function(req, res, next) {

    var userObj = {
      name: req.param('name'),
      title: req.param('title'),
      email: req.param('email'),
      password: req.param('password'),
      confirmation: req.param('confirmation')
    }



    // console.log("Here is my userObj: ", userObj);

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    User.create(userObj, function userCreated(err, user) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {

          console.log("This is err: ", err);
          console.log("this is array check: ", Array.isArray(err));
        // The unique check
        if( Array.isArray(err) && err[0] instanceof Error ){

//          console.log("This is the error.stack: ", err.stack);

            console.log("This is err[0].message");

          err = {err: err[0].message};
        }
        // req.session.flash = {
        //   err: err
        // }

        console.log(err);

        // If error redirect back to sign-up page
        return res.send(400, err);

//          return res.send(500, {err: "yaya"});
      }

      // Log user in
      req.session.authenticated = true;
      req.session.User = user;

      // Change status to online
      user.online = true;
      user.save(function(err, user) {
        if (err) return next(err);

      // add the action attribute to the user object for the flash message.
      // user.action = " signed-up and logged-in."

      // Let other subscribed sockets know that the user was created.
      // User.publishCreate(user);

        // After successfully creating the user
        // redirect to the show action
        // From ep1-6: //res.json(user); 

        res.send(user);
      });
    });
  }
	
};
