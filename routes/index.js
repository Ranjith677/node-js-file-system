var express = require('express');
var router = express.Router();
const mongoose=require('mongoose')

/* GET home page. */
router.get('/',async(req,res)=>{
  res.send("hi user")
});
router.post('/add-user',async()=>{
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500),send({message:'internal server error '})
    error
    
  }
})

module.exports = router;
