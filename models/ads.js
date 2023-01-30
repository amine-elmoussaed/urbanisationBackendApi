const mongoose=require('mongoose');

const adSchema=new mongoose.Schema({
  id_user:{type:String,required:true},
  title: { type: String, required: true},
  reachGoal:{type: String, required: true },
  reach:{type: String },
  images:[{imageUrl:{type:String},redirectionUrl:{type:String}}]
},{timestamps : true });

/*Denoition des model*/

const Ads = mongoose.model('Ads', adSchema);


/*Exportation des modele*/

module.exports=Ads;