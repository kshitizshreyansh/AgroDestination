const express = require('express');
const postSchema = require('../model/postModel');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const checkAuth = require("../Middleware/check-auth");

router.use(bodyParser.urlencoded({ extended: false }));
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/products');


router.post('/post', (req, res, next) => {
    var newPost = new postSchema({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
       
    });

    newPost.save().then(addedProduct => {
        res.status(201).json({
            message: "Product successfully added",
            postId: addedProduct._id,


        })
    })


});

router.get('/getPost', (req, res, next) => {

    postSchema.aggregate([{
        $group: {
            _id: { id: "$id" },
            PostSchema: {
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

router.get("/getPostDetails/:id", (req, res, next) => {

    postSchema.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json({
                message: "Post found successfully",
                post: postt
            });
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    });
});



module.exports = router;