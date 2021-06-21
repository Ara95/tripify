import Header from "../components/HeaderComponent";
import { GoogleLogin } from "react-google-login";
import React from "react";

const LoginGoogle = () => {
  // page content

  const responseGoogle = (response) => {
    console.log(response);
    sessionStorage.setItem("userData", JSON.stringify(response.profileObj));
  };
  //IZNO3grkr3zsIx0-etMq8L-N - secret
  return (
    <GoogleLogin
      clientId="86298055887-rfug692cd27glr2j9mk773os70mscoc0.apps.googleusercontent.com"
      render={(renderProps) => (
        <a
          className="googleButton btn btn-lg btn-block"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img src={"https://img.icons8.com/color/48/000000/google-logo.png"} />
          Logga in med Google
        </a>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      redirectUri={"http://localhost:3000/profile"}
      uxMode="redirect"
      isSignedIn={true}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
