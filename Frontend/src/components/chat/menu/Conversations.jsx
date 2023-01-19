import { Box, Divider, styled } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react"; //useEffect is used to do something after the component is loaded here we are calling our getuser api after the conversation component is called.
import { AccountContext } from "../../../context/AccountProvider";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";

//styled css
const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getUsers();
      let fiteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(fiteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users &&
        users.map(
          (user) =>
            user.sub !== account.sub && (
              <>
                <Conversation user={user} />
                <StyleDivider />
              </>
            )
        )}
    </Component>
  );
};

export default Conversations;
