const io = require("socket.io-client");
const config = require("../config.json");

let socket = new io.Socket(config.socketUri, {
    path: "/nodes"
});


socket.on("connect", async() => {
    socket.emit("returnconnect", {
        node: config
    });


    socket.on("returnconnect2", async(ob) => {
        if(ob.error) return socket.disconnect();
        else return;
    });
    socket.removeListener("returnconnect2", async(ob) => {
        return null;
    })

})

