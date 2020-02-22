const express = require('express');
const cropSchema = require('../model/cropModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const checkAuth = require("../Middleware/check-auth");

router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products');


router.post('/post', (req, res, next) => {
    var newCrop = new cropSchema({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity,
        imagePath: req.body.imagePath
    });

    newCrop.save().then(addedProduct => {
        res.status(201).json({
            message: "Crop successfully added",
            postId: addedProduct._id,


        })
    })


});

router.get('/getCrop', (req, res, next) => {

    cropSchema.aggregate([{
        $group: {
            _id: { id: "$id" },
            CropSchema: {
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

    
})

router.get("/getCropDetails/:id", (req, res, next) => {

    sellcropSchema.findById(req.params.id).then(crop => {
        if (crop) {
            res.status(200).json({
                message: "crop found successfully",
                crop: crop
            });
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    });
});



module.exports = router;