const exp = require("express")
const app = exp()
const PORT = 5000 || process.env.PORT
const user = require("./model/user")
const bc = require("bcrypt")
const jwt = require("jsonwebtoken")
const bodyParser = require('body-parser');
require("./DB/conn");
app.use(exp.json());
app.use(bodyParser.json());
app.use(exp.urlencoded({extended : false}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const authenticate = require("./middleware/auth")
const key = "mynameidarshanthisismyfirstselfmademernproject"

app.get("/", (req, res) => {
    res.status(200).send("Hey There")
})

app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // console.log(username, email, password)

        if (!username || !email || !password) return res.status(422).send({ "Error": "Enter The Details First" })
        else {

            const data1 = await user.findOne({ email: email })
            const data2 = await user.findOne({ username: username })
            // console.log(data);

            if (data1) return res.status(401).send({ "Warning": "Email is already registered" })
            else if (data2) return res.status(402).send({ "Warning": "Username is already registered" })
            else {
                const newUser = new user({
                    username: username,
                    email: email,
                    password: password
                })

                const register = await newUser.save()

                if (register) {
                    res.status(200).json({ msg: 'User registered successfully' })
                }
                else {
                    res.status(404).json({ error: "Error" })
                }
            }
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body

        const data = await user.findOne({ username: username })
        console.log(data);
       
        if (!data) {
            res.status(422).json("Username is not valid")
        }
        else {
            // console.log(password);
            // console.log(data.password);
            // const isMatch = data.pssword === password
            // console.log(isMatch)

            const isMatch = bc.compare(password , data.password)
            if (!isMatch) {
                console.log("asgasj");
                res.status(422).json("Password is not valid")
            }
            else {
                let token = jwt.sign({ _id: data._id }, key)
                data.tokens = data.tokens.concat({ token: token })
                await data.save()
                console.log(token);

                res.cookie("jwtToken" , token , {
                    expires : new Date(Date.now() + 605000000),
                    httpOnly : true
                })

                res.status(200).json({ "Msg": "Loggen in successfully" })
            }
        }
    } catch (e) {
        console.log(e);
    }
})

app.post("/contact" , authenticate , async (req  , res) => {
    try{
        const {name , address , mobile , message} = req.body
        console.log(7);
        if(!name || !address || !mobile || !message) res.status(422).send({"Warning" : "Enter details"})
        else{
            console.log(8);
            const userData = await user.findOne({_id : req.userId})
            console.log(9);
            
            if(userData){
                userData.msg = userData.msg.concat({name : name , address : address , mobile : mobile , message : message}) 
                await userData.save()
                console.log(10);

                console.log(message);
                res.status(200).json("Message Sent successfully")
            }
        }
    }catch(e){
        console.log(e);
    }
})

app.listen(PORT, () => {
    console.log("Server is connected at " + PORT);
})