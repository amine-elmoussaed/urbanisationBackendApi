const adscompaign=require('./models/ads');
const mongoco=require('./atlas_connect');
const users=require('./models/user');
const{sendError, sendMessage} = require("./message");

async function add_new_compaign(req,res){
    
   let _id_user=req.body.id_user;
   let _title=req.body.title;
   let _reachGoal=req.body.reachGoal;
    users.find({"id":_id_user},function(err,docs){
        if(typeof(docs)==! "undefined"){
            return sendError(res,'Unexistant_user_id');
        }
        else{
            const filter={id_user:_id_user,title:_title};
    adscompaign.findOne((filter),function(err,docs){
        console.log(docs);

        if(docs!=null)  {
             return sendError(res,'compaign_name_already_exist');
        }
        else{

            console.log('in the boucle');
            const adsCompaign1= new adscompaign({
                id_user:_id_user,
                title:_title,
                reachGoal:_reachGoal
                
        });
        adsCompaign1.save()
        .then((result)=>{})
        .catch((err)=>console.log(err)) ;
         return sendMessage(res,'compaign_Registred_succesfully');
            
        }
    });

            
        }

    

   });
   
    
    
        
      
    

    
}
module.exports.add_new_compaign=add_new_compaign;