
const mongoco=require('./atlas_connect');
const {sendError, sendMessage}= require("./message");

async function addAd(req,res){

    let _title=req.body.title;
    let _url=req.body.url;


    

}
module.exports.addAd=addAd;