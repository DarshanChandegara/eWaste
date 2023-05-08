const jwt = require("jsonwebtoken")
const user = require("../model/user")

const key = "mynameidarshanthisismyfirstselfmademernproject"

const Authenticate = async (req,res,next) => {
    // try{
        console.log(2);
        const token =  req.cookies.jwtToken
        console.log(token);
        if(!token) res.status(402).json("No Token Available")
        const verifyToken = jwt.verify(token , key)
        console.log(3);
        const rootUser = await user.findOne({_id : verifyToken._id , "tokens.token" : token})
        console.log(4);
        
        if(!rootUser){
            res.status(401).json("Unauthorized user")
        }   
        
        console.log(5);                                                                                     
        req.token = token
        req.rootUser = rootUser     
        req.userId = rootUser._id
        
        console.log(6);
        next()
    // }
    // catch(e){
    //     console.log(e);
    // }
}

module.exports = Authenticate