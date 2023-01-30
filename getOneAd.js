const mongoco=require('./atlas_connect');
const ads=require('./models/ads');
const{sendError, sendMessage} = require("./message");

async function getOneAd(req,res){
    console.log("outtttttttttttttttttttttttttttttttt");
    let _id_user=req.body.user_id;
    let _id_ad=req.body.ad_id;
    const filter={id_user:_id_user,_id:_id_ad};
    ads.find((filter),function(err,docs)
    {
        console.log("innnnnnnnnnnnnnnnnnnnn");
        if(typeof(docs)!== "undefined"){
            return sendMessage(res,docs);
        }else {
            return sendError(res,"No playlist yet")
        }
    });

    
}
module.exports.getOneAd = getOneAd;