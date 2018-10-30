const 
    express = require('express'),
    postsRouter = new express.Router(),
    postsCtrl = require('../controllers/postsController.js'),
    verifyToken = require('../serverAuth').verifyToken


postsRouter.get('/', postsCtrl.index)

//protected routes
postsRouter.use(verifyToken)
postsRouter.post('/', postsCtrl.create)
postsRouter.get('/:id', postsCtrl.show)
postsRouter.patch('/:id', postsCtrl.update)
postsRouter.delete('/:id', postsCtrl.delete)

module.exports = postsRouter
