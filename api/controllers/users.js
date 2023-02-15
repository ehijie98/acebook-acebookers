const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'User created successfully' });
      }
    });
  },
  Search: async (req, res) => {
    const searchTerm = req.query.q;
    const regex = new RegExp(searchTerm, 'i');
    try{
      const users = await User.find({ $or: [ { firstName: regex }, {lastName: regex} ] });
      res.json(users);
    } catch (err){
      console.log(err);
      res.status(500).json({ message: 'Users search error'})
    }
  }
};

module.exports = UsersController;
