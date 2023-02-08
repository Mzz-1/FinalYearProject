require("dotenv").config();
const { v4 } = require("uuid");
const User = require('../models/User')
const sendEmail = require("../Utils/SendEmail");


const forgoPasswordRoute={
path:'/api/forgot-password/:email',
method:'put',
handler:async(req,res)=>{
    const {email} = req.params
 

}
}