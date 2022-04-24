const io=require("socket.io")(9800,{
    cors:{origin:"https://social-media-mo7med.netlify.app/"}
})


let users=[];
const addUser=(userId,socketId)=>{
    !users.some(user=>user.userId===userId) && 
    users.push({userId,socketId})
}

const removeUser=(socketId)=>{
    users=users.filter(user=>user.socketId !==socketId);
}

const getUser=(userId)=>
{
    return users.find(user=>user.userId===userId )
}

io.on('connection', (socket) => {
    // when connected
    console.log('a user connected 🤐🤐😋');
    // take userId and SocketId from user
    socket.on("addUser",userId=>{
    addUser(userId,socket.id);
    io.emit("getUsers",users);
});
    // io.emit("welcome","hello this is socket server!")
// whem disconnect

socket.on("sendMessage",({senderId,receiverId,text})=>{
const user=getUser(receiverId);
io.to(user.socketId).emit("getMessage",{senderId,text})
})

    socket.on('disconnect', () => {
      console.log('user disconnected ! 🙄😪😪🥱😴');
      removeUser(socket.id)
    io.emit("getUsers",users);

    });
  });