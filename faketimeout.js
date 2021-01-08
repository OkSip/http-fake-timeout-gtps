//http fake time out by okesip
var http = require("http")
var serverdata = 'server|127.0.0.1\nport|17091\ntype|1\n#maint|Hai\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001'

var server = http.createServer(function (req, res) {
    if (req.url === "/growtopia/server_data.php" && req.method.toLowerCase() === "post") {
        res.writeHead(404, { "Content-Type": "text/html" })
        res.write(serverdata)
        res.end()
    }
    else {
        res.write("nob")
    }
})
server.listen(8080)
console.log("Server UP")