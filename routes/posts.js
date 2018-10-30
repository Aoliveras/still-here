const 
    express = require('express'),
    postsRouter = new express.Router(),
    postsCtrl = require('../controllers/postsController.js')

postsRouter.get('/', postsCtrl.index)
postsRouter.post('/', postsCtrl.create)

module.exports = postsRouter
