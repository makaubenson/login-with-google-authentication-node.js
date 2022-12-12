const express = require("express");
const passport = require("passport");
const router = express.Router();

//@desc Authenticate with Google
//@route GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google auth callback
//@route GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect to dashboard.
    res.redirect("/dashboard");
  }
);

//@desc Logout user
//@route /auth/logout

router.get("/logout", (req, res) => {
  //with passport middleware, once login in, we will have logout() method in request method
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
