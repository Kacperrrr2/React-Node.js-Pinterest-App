import express from "express";
import {test} from "../controllers/user.controller.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
const router= express.Router()

router.post("/create", async (req, res)=>{
const userInformation= req.body;
const hashPassword= await bcrypt.hash(req.body.password,10)
await User.create({
    displayName:req.body.displayName,
    username:req.body.username,
    email:req.body.email,
    hashPassword:hashPassword
})
res.json("User created")
})
router.get("/test",test)

export default router