import express from "express";
import User from "../models/User";

const router = express.Router();

router.post("/", (req, res) => {
  // credentials will contain email and password from client data
  const { credentials } = req.body;
  User.findOne({ email: credentials.email }).then(user => {
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: user.toAuthJSON() });
    } else {
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
  });
});

export default router;
