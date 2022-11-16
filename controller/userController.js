const User = require('../model/User')
module.exports.addUser = async (req, res) => {
    try {
      
        const user = await User.create({
          name:req.body.name,
        });
      
        user.save();
        return res.json(200, {
          message: "User Added Succesfully",
          success: true,
        });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: "Request Could Not Processed",
      });
    }
  };