const router = require("express").Router();
const userModel = require("../models/user");

// Here we are normal authentication. `/signup` is the route for signup and `/signin` is the route for signin.
router.post("/signup", (req, res) => {
  const data = req.body;
  console.table(data);
  const user = new userModel(data);
  user.save((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});	

router.post("/signin", (req, res, next) => {
  const data = req.body;
  console.table(req.body);
  console.log(data);
  userModel.findOne(
    { emailID: data.emailID, password: data.password },
    (err, user) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(user);
      }
    }
  );
});

module.exports = router;
