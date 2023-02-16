const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "User created successfully" });
      }
    });
  },
  Search: async (req, res) => {
    const searchTerm = req.query.q;
    const regex = new RegExp(searchTerm, "i");
    try {
      const users = await User.find({
        $or: [{ firstName: regex }, { lastName: regex }],
      });
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Users search error" });
    }
  },
  Find: async (req, res) => {
    const userId = req.params.id;
    try {
      const users = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: `User not found` });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error finding user" });
    }
  }

};

module.exports = UsersController;
