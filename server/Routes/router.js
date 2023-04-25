// const express = require("express");
// const router = new express.Router();
// const conn = require("../db/conn");
import conn from "../db/conn.js"
import  express  from "express";

const router = express()
// register user data
router.post("/create", (req, res) => {

    console.log("data checking",req.body);

    const { name, status} = req.body;
    // console.log(name);

    if (!name || !status) {
        res.status(422).json("plz fill the all data");
    }

    try {
        conn.query("SELECT * FROM department WHERE name = ?", name, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is Already Exist")
            } else {
                conn.query("INSERT INTO department SET ?", { name, status }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});




// get userdata
// get value on edit page also 
router.get("/getusers",(req,res)=>{

    conn.query("SELECT * FROM department",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});


// user delete api

router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM department WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});



// get single user

 router.get("/rolesinduser/:id",(req,res)=>{
      
    const {id} = req.params;
    console.log("getdepart",id)
    

    conn.query("SELECT * FROM department WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});
// single user  vieweer 

// update users api


  router.put("/rolesupdateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;
    console.log("udatadepartment",id,data);
// res.status(200).json(data);
console.log("helo update department");
    conn.query("UPDATE department SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});







// roles page api s starting post 

router.post("/rolescreate", (req, res) => {

    // console.log(req.body);

    const { name, status} = req.body;

    if (!name || !status) {
        res.status(422).json("plz fill the all data");
    }

    try {
        conn.query("SELECT * FROM Roles WHERE name = ?", name, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is Already Exist")
            } else {
                conn.query("INSERT INTO Roles SET ?", { name, status }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});





// roles page get data api starting 


router.get("/rolesgetusers",(req,res)=>{

    conn.query("SELECT * FROM Roles",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});







// roles padge get data api ending 





// roles page delte api starting 

router.delete("/rolesdeleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM Roles WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});




// roles api for updateusers starting



router.put("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;
// res.status(200).json(data);
console.log("helo update department");
    conn.query("UPDATE department SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});







// roles api for updateusers ending 



// roles page delte api ending






// roles page api s starting ending 





// module.exports = router;
export default router;



