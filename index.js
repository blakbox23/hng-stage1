const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        const apiRes = [{
            slackUsername: "peter KE", 
            backend: "Yes", 
            age: "20s", 
            bio: "New node backend developer. Also proficient in Js,React,Ruby and RoR" 
        }]

        res.writeHead(200, {"content-Type": "application/json"});
        res.end(JSON.stringify(apiRes));
        
    }
})
   
const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>console.log(`Server running at port ${PORT}...`))