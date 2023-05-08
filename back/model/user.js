const mn = require("mongoose")
const bc = require("bcrypt")
const jwt = require("jsonwebtoken")

const key = "mynameidarshanthisismyfirstselfmademernproject"

const schema = mn.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        require : true
    },
    tokens :[{
        token: {
            type : String,
            required : true
        }
    }],
    msg : [{
        name : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        mobile : {
            type : Number,
            required : true
        },
        message : {
            type : String,
            required : true
        }
    }]
})

// schema.methods.generateAuthToken = async function(){
//     let _token  = jwt.sign({_id : this._id.toString()} , key )
//     this.tokens = this.tokens.concat({token : _token})
//     await this.save()
//     return _token
// }

schema.pre("save" , async function(next){
    this.password = await bc.hash(this.password , 10)
    next()
})

const User = mn.model('USER' , schema)

module.exports = User