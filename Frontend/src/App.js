import Massenger from "./components/Massenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
function App() {
  const clientId =
    "304770802191-lkvuoltm91mlrdcc5crat1ttipkfhl3r.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Massenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
