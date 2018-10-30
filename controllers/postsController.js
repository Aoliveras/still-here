const
    Post = require('../models/Post'),
    User = require('../models/User')

module.exports = {
    //list all posts
    index: (req, res) => {
        Post.find({}, (err, posts) => {
            if (err) return res.json({ success: false, err });
            res.json({ success: true, payload: posts })
        })
    },

    //show specific post
    show: (req, res) => {
        Post.findById(req.params.id, (err, post) => {
            if (err) return res.json({ success: false, err });
            res.json({ success: true, payload: post })
        })
    },

    //create post
    create: (req, res) => {
        console.log("USER", req.user)
        //create temp post object which will merge req.body with req.user.id
        let post = {...req.body, author: req.user.id}; // associates author with post
        Post.create(post, (err, post) => {
            if(err) return res.json({ success: false, err });
            //need to push new post into posts[] as shown in our model
            User.findById(req.user.id, (err, currentUser) => {
                if (err) return res.json({ success: false, err })
                currentUser.posts.push(post);
                currentUser.save((err, user) => {
                    if (err) return res.json({ success: false, err });
                    res.json({ success: true, payload: user });
                })
            })
        })
    },

    //edit post
    update: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedPost) => {
            if (err) return res.json({ success: false, err });
            res.json({ success: true, payload: updatedPost });
        })
    },

    //delete post
    delete: (req, res) => {
        Post.findByIdAndRemove(req.params.id, (err, deletedPost) => {
            if (err) return res.json({ success: false, err });
            res.json({ success: true, payload: deletedPost });
        })
    }
}