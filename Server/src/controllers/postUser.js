const user = require ('../models/User')

const postUser =(req,res)=>{
return new Promise((resolve,reject)=>{
    const {email,password}= req.body;
 if(!email|| !password){
reject (new Error('Email y contraseña son campos requeridos.'))
return; 
}

})
}



module.exports = {
    postUser
};
