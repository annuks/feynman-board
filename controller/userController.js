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


  module.exports.addTopic = async (req, res) => {
  try {
     //console.log("Topic",req.params.id)
    const user = await User.findById(req.params.id);
   // console.log("User", user);
    if (user) {
    
      const topic = await Topic.create({
        userid: user._id,
        title:req.body.title,
        desc:req.body.desc,
        level:req.body.level
        
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
      message: " User id not found for Topic Creation",
    });
  }
};

module.exports.getTopic = async (req, res) => {
  try {
   const user = await User.findById(req.params.id);
   if (user) {
    const topic =await Topic.find();
     return res.json(200, {
        message: "Topic List Generated",
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

// module.exports.getTopic = async(req,res)=>{
//   try{
//   if(!req.query.user_id){
//       return res.json(400, {
//           message: "Enter User Id",
//           success: false,
//       });
//   }
//   const topic= await Topic.find({userid:req.query.user_id});
//   if(order){
//       return res.json(200, {
//         message: "Order list Generated",
//         success: true,
//         data: {
//           order
//         },
//       });
//     }else{
//         return res.json(400, {
//             message: "Order Not Found",
//             success: false,
//           });
//     }

//   } catch (err) {
//     console.log("********", err);
//     return res.json(500, {
//         success: false,
//         message: " *Internal Server Error- User id Not Found",
//     });
//   }
// };