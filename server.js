require('dotenv').config();
const
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose =  require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/still-here',
    PORT = process.env.PORT || 3001,
    usersRoutes = require('./routes/users.js'),
    postsRoutes = require('./routes/posts.js')

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

app.use(logger('dev'))
app.use(express.json())

app.get('/api', (req, res) => {
    res.json({ message: "API root." })
})

app.use('/api/users', usersRoutes)
app.use('/posts', postsRoutes)

app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}.`)
})

