import { AppBar, Toolbar, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 100px;
  background-color: #00a884;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background-color: #cccccc;
`;
const Massenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};
export default Massenger;
