const express = require('express');
const scropSchema = require('../model/sellcropModel');
// const scropModel = require('../model/sellcropModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const checkAuth = require("../Middleware/check-auth");
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

const nexmo = new Nexmo({
    apiKey: '31ae4131',
    apiSecret: 'RkD5gpJvL3rA0Sae'
}, {debug: true});



router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products');
// const Nexmo = require('nexmo');
// const nexmo = new Nexmo({
//     apiKey: '1fdbfa23',
//     appSecret: 'F4PesFTNWnEQ4NT'
// });



router.post('/post', (req, res, next) => {
    
    var newScrop = new scropSchema({
        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        image: req.body.image 
    });
    console.log("inside sell crop");
    newScrop.save().then(addedProduct => {
        console.log("newScrop save()");
        res.status(201).json({
            message: "crop successfully added",
            postId: addedProduct._id,
        })
        console.log("crop added succesfully");
    })


});

router.get('/getScrop', (req, res, next) => {

    scropSchema.aggregate([{
        $group: {
            _id: { id: "$id" },
            ScropSchema: {
                $push: "$$ROOT"
            }
        }
    }], function(err, result) {
        console.log(result)
        res.status(200).json({
            error: err,
            result: result
        })

    })

    // scropSchema.find().then(responseData => {
    //     res.status(200).json({
    //         message: "Products fetched successfully",
    //         scropclears: responseData
    //     })
    // })
})

router.get("/getScropDetails/:id", (req, res, next) => {

    scropSchema.findById(req.params.id).then(scrop => {
        if (scrop) {
            res.status(200).json({
                message: "Product found successfully",
                scrop: scrop
            });
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    });
});

router.post('/mail', (req, res, next) => {


    console.log("inside mail", req.body.mail)
    let transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        service: 'Gmail',

        auth: {
            user: 'sitshopnation@gmail.com', // generated ethereal user
            pass: 'qwerty@123' // generated ethereal password
        }
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: 'sitshopnation@gmail.com', // sender address
        to: req.body.mail, // list of receivers
        subject: "Crop Request", // Subject no
        text: "following crops are required", // plain text body
        // html: "<b>Hello world?</b>" // html body
    }, (err, res) => {
        if (err) {
            console.log("Mail ERROR", err);
        } else {
            console.log("Here is the response of mail", res);
        }
    });


    
 
    res.status(201).json({
        message: "Mail successfully sent",


    })

})





router.post('/message', (req, res, next) => {

    const t = req.body.message;
    console.log("inside message", t)
    //const to = parseInt(req.body.message);
    const to = '+919113553831';
    const text = 'crop required';
    const from = 'Nexmo';


    nexmo.message.sendSms(
        from, to, text, {type:'unicode'},
        (err,responseData) => {
            if(err){
                console.log(err);
            }else{
                console.log(responseData);
            }
        }
    );


    // let transporter = nodemailer.createTransport({
    //     // host: "smtp.gmail.com",
    //     // port: 587,
    //     // secure: false, // true for 465, false for other ports
    //     //service: 'Gmail',

    //     auth: {
    //         user: 'sitshopnation@gmail.com', // generated ethereal user
    //         pass: 'qwerty@123' // generated ethereal password
    //     }
    // });

    // send mail with defined transport object
    // transporter.sendMail({
    //     from: 'sitshopnation@gmail.com', // sender address
    //     to: req.body.mail, // list of receivers
    //     subject: "Order placed successfully", // Subject line
    //     text: "Your order has been successfully placed.Thank You for shopping with us", // plain text body
    //     // html: "<b>Hello world?</b>" // html body
    // }, (err, res) => {
    //     if (err) {
    //         console.log("Mail ERROR", err);
    //     } else {
    //         console.log("Here is the response of mail", res);
    //     }
    // });


    
 
    res.status(201).json({
        message: "Message successfully sent",


    })

})






router.delete('/:id', (req, res, next) => {
   
   

    scropSchema.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Item deleted!" });
    });


})



module.exports = router;