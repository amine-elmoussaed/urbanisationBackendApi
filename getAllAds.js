const mongoco=require('./atlas_connect');
var adscompaign=require('./models/ads');
const{sendError, sendMessage} = require("./message");

async function getAllAds(req,res){
    console.log("outtttttttttttttttttttttttttttttttt");
    let _id_user=req.body.user_id;
    const filter={id_user:_id_user};
    adscompaign.find((filter),function(err,docs)
    {
        console.log("innnnnnnnnnnnnnnnnnnnn");
        if(typeof(docs)!== "undefined"){
            return sendMessage(res,docs);
        }else {
            return sendError(res,"No playlist yet")
        }
    });
}
module.exports.getAllAds = getAllAds;