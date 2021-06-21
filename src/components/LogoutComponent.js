import Header from "../components/HeaderComponent";
import { GoogleLogout } from "react-google-login";
import React from "react";

const LogoutGoogle = () => {
  // page content

  const Logout = (response) => {
    sessionStorage.removeItem("userData");
    console.log("SuccessfullyLoggedOut");
    console.log(response);
  };
  //IZNO3grkr3zsIx0-etMq8L-N - secret
  return (
    <GoogleLogout
      clientId="86298055887-rfug692cd27glr2j9mk773os70mscoc0.apps.googleusercontent.com"
      render={(renderProps) => (
        <a
          className="googleButton btn btn-lg btn-block"
          onClick={renderProps.onClick}
        >
          <img src={"https://img.icons8.com/color/48/000000/google-logo.png"} />
          Logga ut
        </a>
      )}
      buttonText="Logga ut"
      onLogoutSuccess={Logout}
      onFailure={Logout}
      redirectUri={"http://localhost:3000/login"}
    />
  );
};

export default LogoutGoogle;
