const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://urbanisation_user:<urbanisation>@cluster0.6x8gyjs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Cluster0").collection("homevideo");
  // perform actions on the collection object
  console.log('conneter à la bbb')
  client.close();
})