import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let users = [];
const addUsers = (userData, socketId) => {
  const index = users.findIndex((user) => user.sub === userData.sub);
  if (index !== -1) {
    users[index].socketId = socketId;
  } else {
    users.push({ ...userData, socketId });
  }
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("addUsers", (UserData) => {
    addUsers(UserData, socket.id);
    io.emit("getUsers", users);
  });
  //send message
  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);
    io.to(user.socketId).emit("getMessage", data);
  });
});
