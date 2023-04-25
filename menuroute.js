const express=require('express')
const router=express.Router()
const menumodal=require('../modals/menumodal')

//Get all pizza req @get

router.get('/getAllMenus', async (req,res) =>{
    try {
        const menus =await menumodal.find()
        res.send(menus)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports=router;