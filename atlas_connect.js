const mongoose = require('mongoose');
const db_url='mongodb+srv://urbanisation_user:adminadmin@cluster0.avif1xd.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_url,{UseNewUrlParser: true, useUnifiedTopology: true});