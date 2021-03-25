const express = require('express')
const rtMain = express.Router()

rtMain.get('/',(req,res)=>{
    res.json({res: 'welcome to the API!!'})
})

module.exports= rtMain