import app from './app'

const port = process.env.PORT || 8080

app.listen(port, (err)=>{
    if(err){
        return console.log(err)
    }

    return console.log("server is running %d",port)
})