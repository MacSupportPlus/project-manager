const mongoose = require('mongoose');
    uri ="products";

mongoose.connect(`mongodb://localhost/${uri}`,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
    .then(()=> console.log("You got ya access to ya database fam..."))
    .catch((err)=> console.log("YOU MESSED SOME ISH UP BRO!!", err))