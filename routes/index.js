const express=require('express')
const router=express.Router()
const userController=require('../controller/user')

const eventController=require('../controller/events')

router.get('/index',(req,res)=>{

    res.json({message:'hello event managment'})
})

router.post('/signup',userController.postSignup)
router.post('/login',userController.postLogin)
router.get('/guest',userController.guestPost) 

router.get('/events',eventController.allEvents)
router.post('/newevent',eventController.postEvents)
router.put('/update-event/:id',eventController.updateEvents)
router.delete('/deleteEvent/:id',eventController.deleteEvents)

module.exports=router