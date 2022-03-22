const express = require("express");
const router = express.Router()

/**
 * Get Product List
 * 
 * @return product list | empty 
 */

router.get("/",async(req,res)=>{
    try{
        res.json({
            status : 200,
            message : "Sucess"
        })
    }catch (err){
        console.error(err)
        return res.status(500).send("Server Error")
    }
})

module.exports = router;