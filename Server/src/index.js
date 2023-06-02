const app = require('./app') //esta es la config de nuestro server
const {conn}=require ('./DB_connection')// esta es la config de nuestro DB

const PORT = process.env.PORT || 3001;

app.listen(PORT,async ()=>{
    console.log(`server raised in port : http://localhost:${PORT}`)
   await conn.sync({force:true}) 
})
