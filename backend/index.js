const express =require('express')
const app = express()
const conn = require('./database/database')


conn.authenticate().then(() => {
    console.log("conexao feita")
}).catch((msgErro) => {
    console.log(msgErro)
})


app.get("/", (req,res) => {
    res.send("API rodando")
})

app.listen(8080, () =>{
    console.log("Server running on localhost:8080")
})