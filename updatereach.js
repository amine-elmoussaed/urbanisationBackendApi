const mongoco=require('./atlas_connect');
var adscompaign=require('./models/ads');
const{sendError, sendMessage} = require("./message");

async function update_compaign(req,res){
    let id=req.body.id;
    let reach=req.body.newreach;
    adscompaign.findById(id,function(err,docs){
        console.log(docs);
        if(docs==null){
            return sendError(res,'unexistant_compaign');
        }
        else{
            const update={"reach":reach};    
            console.log('in the boucle');
            adscompaign.findByIdAndUpdate(id,update)
            .then(()=>{})
            .catch((err)=>console.log(err)) ;
            return sendMessage(res,'compaign_updated_sucssesfullly');
            
        }
    });

    
}
module.exports.update_compaign= update_compaign;