const express = require('express');
const tipSchema = require('../model/tipModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const checkAuth = require("../Middleware/check-auth");

router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products');


router.post('/post', (req, res, next) => {
    var newTip = new tipSchema({
        id: req.body.id,
        
        title: req.body.title,
        description: req.body.description,
       
    });

    newTip.save().then(addedProduct => {
        res.status(201).json({
            message: "Tip successfully added",
            postId: addedProduct._id,


        })
    })


});

router.get('/getTip', (req, res, next) => {

    tipSchema.aggregate([{
        $group: {
            _id: { id: "$id" },
            TipSchema: {
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

    // productSchema.find().then(responseData => {
    //     res.status(200).json({
    //         message: "Products fetched successfully",
    //         products: responseData
    //     })
    // })
})

router.get("/getTipDetails/:id", (req, res, next) => {

    tipSchema.findById(req.params.id).then(tip => {
        if (tip) {
            res.status(200).json({
                message: "Tip found successfully",
                tip: tip
            });
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    });
});



module.exports = router;