const User = require('../model/User')
const Topic = require('../model/Topic')

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

  module.exports.loginUser = async(req,res)=>{
    try{
        let user = await User.findOne({ name:req.body.name });

      if (!user) {
        return res.json(402, {
          message: "User not Availsble",
          success : false
        });
      }
      // if sign-in details are correct
      else{
      const topic =await Topic.find({userid:user._id});
      return res.json(200, {
        message: "User Topic List : ",
        success: true,
        data: {
            topic,
            user 
          },
      });
 }}
catch (err) {
      console.log(" Error in JWT", err);
      return res.json(500, {
        message: "Internal Server error",
      });
    }
  };



  module.exports.addTopic = async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    if (user) {
    
      const topic = await Topic.create({
        userid: user._id,
        title:req.body.title,
        desc:req.body.desc,        
      });
      
      topic.save();
      return res.json(200, {
        message: "Topic with Description Created",
        success: true,
      });
  } else {
      return res.json(400, {
        message: "User Not Found",
        success: false,
      });
    }
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.getTopic = async (req, res) => {
  try {
   const user = await User.findById(req.params.id);
   if (user) {
    const topic =await Topic.find();
     return res.json(200, {
        message: "User Topic List : ",
        success: true,
        data: {
            topic, 
         },
      });
    }

  } catch (err) {
    console.log("********", err);
    return res.json(500, {
        success: false,
        message: "**Internal Server Error**",
    });
  }
};
