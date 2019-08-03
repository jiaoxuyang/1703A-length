module.exports = {
    devServer:{
        before(app){
            app.get("/api/list",(req,res)=>{
                let data = require("./mock/list.json")
                res.send({code:200,data})
            })
        }
    }
}