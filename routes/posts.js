const 
    express = require('express'),
    postsRouter = new express.Router(),
    postsCtrl = require('../controllers/postsController.js'),
    verifyToken = require('../serverAuth').verifyToken


postsRouter.get('/', postsCtrl.index)
postsRouter.get('/:id', postsCtrl.show)

//protected routes
postsRouter.use(verifyToken)
postsRouter.post('/', postsCtrl.create)
postsRouter.patch('/:id', postsCtrl.update)
postsRouter.delete('/:id', postsCtrl.delete)

module.exports = postsRouter
