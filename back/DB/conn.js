const mn = require("mongoose")

const DB ="mongodb+srv://darshan120:IBReHPOB8E8uOUX8@cluster0.fscmszf.mongodb.net/eWaste?retryWrites=true&w=majority"

mn.connect(DB).then( () => {
    console.log("DB Connection Succefull");
}).catch((e) => {
    console.log("Error in DB Connection" + e);
})