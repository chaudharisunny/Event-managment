const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://chaudharisunny6:IiP0tdFHjLnDy05S@cluster0.v5zql.mongodb.net/")
.then(()=>{
    console.log('database connected');
    
}).catch((err)=>{
    console.log(err);
    
})