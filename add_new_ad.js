const adscompaign=require('./models/ads')
const mongoco=require('./atlas_connect');
const{sendError, sendMessage} = require("./message");

async function add_new_ad(req,res){
   let _url_image=req.body.adimage;
   let _url_link=req.body.adlink;
   let _id_playlist=req.body.id_compaign;
    console.log(_id_playlist);

    const filter={"_id":_id_playlist,"images.imageUrl":_url_image};
   
    
  
     adscompaign.findOne((filter),function(err,docs){
        console.log(docs);

        if(docs!=null)  {
            return sendError(res,'add_already_exist_in_the_compaign');
        }
        else{
            adscompaign.findById(_id_playlist,function(err,docs){
                console.log(docs);
                if(docs==null){
                    return sendError(res,'unexistant_compaign');
                }
                else{
                    const update={$push:{images:{imageUrl:_url_image,redirectionUrl:_url_link}}};    
                    console.log('in the boucle');
                    adscompaign.findByIdAndUpdate(_id_playlist,update)
                    .then(()=>{})
                    .catch((err)=>console.log(err)) ;
                    return sendMessage(res,'ad_Registred_succesfully');
                    
                }
            });
            
         }
    });

    
        
      
    

}
module.exports.add_new_ad=add_new_ad;
