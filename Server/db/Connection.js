const mongoose = require('mongoose');
const db = "mongodb://k:123@ac-wxbqu0u-shard-00-00.w8lcod8.mongodb.net:27017,ac-wxbqu0u-shard-00-01.w8lcod8.mongodb.net:27017,ac-wxbqu0u-shard-00-02.w8lcod8.mongodb.net:27017/first?ssl=true&replicaSet=atlas-djrdk5-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection Start"))
.catch((error)=> console.log(error.message))