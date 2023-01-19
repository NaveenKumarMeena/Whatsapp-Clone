import { Dialog, List, ListItem, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { qrCodeImage } from "../../const/data";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";
import { addUser } from "../../service/api";
const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
const Stylelist = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;
const Qrcode = styled("img")({
  //here img is not a part of material ui component so it cannot use directly in styled we have to pass it in string
  height: 264,
  width: 264,
  margin: "50px 0px 0px 50px",
});
const dialogStyle = {
  height: "96%",
  marginTop: "13%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  const OnLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
    // console.log(decoded);
  };
  const OnLoginError = (res) => {
    console.log("failure");
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use Whatsapp on your computer:</Title>
          <Stylelist>
            <ListItem>1. Open Whatsapp on your Phone</ListItem>
            <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
            <ListItem>
              3. Point your Phone to the screen to capture the Code
            </ListItem>
          </Stylelist>
        </Container>
        <Box style={{ position: "relative" }}>
          <Qrcode src={qrCodeImage} alt="No qrcode" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(30%)",
            }}
          >
            <GoogleLogin onSuccess={OnLoginSuccess} onError={OnLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
