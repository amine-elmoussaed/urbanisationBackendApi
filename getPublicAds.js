const mongoco=require('./atlas_connect');
var adscompaign=require('./models/ads');
const{sendError, sendMessage} = require("./message");

async function getAllPublicAds(req,res){
    console.log("outtttttttttttttttttttttttttttttttt");
    let _id_user=req.body.user_id;
    
    adscompaign.find({},function(err,docs)
    {
        console.log("innnnnnnnnnnnnnnnnnnnn");
        if(typeof(docs)!== "undefined"){
            return sendMessage(res,docs);
        }else {
            return sendError(res,"No compaigns yet")
        }
    });
}
module.exports.getAllPublicAds = getAllPublicAds;