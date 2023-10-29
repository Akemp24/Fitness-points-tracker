// import the mongoose package
const mongoose = require('mongoose');

// connect to the mongodb database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitness-tracker_Db',
{
    // use the new url parser
    useNewUrlParser: true,
    // use the new server discovery and monitoring engine
    useUnifiedTopology: true,
}
 );

// export the connection
module.exports = mongoose.connection;
