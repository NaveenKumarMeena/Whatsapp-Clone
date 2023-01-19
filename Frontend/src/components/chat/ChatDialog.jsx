import { Box, Dialog, styled } from "@mui/material";

import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import ChatBox from "./chat/ChatBox";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";

const Container = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  min-width: 400px;
`;
const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  borderRadius: 0,
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Container>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Container>
    </Dialog>
  );
};

export default ChatDialog;
