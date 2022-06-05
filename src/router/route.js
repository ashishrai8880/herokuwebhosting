const { urlencoded } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
// const User = require('../model/user');
// const mongoose = require('mongoose');
const alert = require('alert')



// router.get('/' , (req , res)=>{
//     res.status(200).render('login');
// });

// router.get('/signin' , (req,res)=>{
//     res.status(200).render('signIn');
// })

// router.post('/signin' , async (req ,res)=>{

//     try {
        
//         const data = await req.body ;
//         if(data.password === data.confirmPassword){

//             const newUser = new User(data);
//             const saved = await newUser.save();
//             res.status(200).render('index');
//         }
//         else{
//             alert("You enter wrond details")
//         }

//     } catch (error) {
//         res.status(404).send("Not saved to database due to : "+ error);
//     }

// })

// router.post('/login' , async (req , res)=>{
//     try {
        
//         const email = req.body.email ;
//         const user = await User.find({email : email});

//         if(user[0].password == req.body.password){
//             res.status(200).render('index');
//         }
//         else{
//             window.alert("You enter wrong details !!")
//         }

//     } catch (error) {
        
//         res.status(200).render('login')
//     }
// })

router.get('/' , (req ,res)=>{
    res.status(200).render('index');
})

router.get('/home' , (req ,res)=>{
    res.status(200).render('index');
})

router.get('/entertainment' , (req ,res)=>{
    res.status(200).render('entertainment')
})
router.get('/business' , (req ,res)=>{
    res.status(200).render('business')
})
router.get('/sports' , (req ,res)=>{
    res.status(200).render('sports')
})
router.get('/health' , (req ,res)=>{
    res.status(200).render('health')
})
router.get('/technology' , (req ,res)=>{
    res.status(200).render('technology')
})
router.get('/science' , (req ,res)=>{
    res.status(200).render('science')
})

router.get('/covid' , (req ,res)=>{
    res.status(200).render('covid')
})

router.get('*' , (req ,res)=>{
    res.status(400).render('error');
})

module.exports = router ;