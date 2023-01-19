import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, styled, Typography } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const Header = styled(Box)`
  background-color: #008069;
  height: 107px;
  color: #ffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 16px;
    font-weight: 600;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;
const Text = styled(Typography)`
  font-size: 18px;
`;
const drawerstyle = {
  left: 5,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerstyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={() => setOpen(false)} />
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
};

export default InfoDrawer;
