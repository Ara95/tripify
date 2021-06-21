import Header from "../components/HeaderComponent";
import LoginGoogle from "../components/GoogleLoginComponent";
import LogoutGoogle from "../components/LogoutComponent";
import React from "react";

import { GoogleLogin } from "react-google-login";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  // page content
  componentDidMount() {
    const data = JSON.parse(sessionStorage.getItem("userData"))
      ? JSON.parse(sessionStorage.getItem("userData"))
      : "";
    console.log(data);
    this.setState({ name: data.name, email: data.email });
  }

  render() {
    return (
      <div>
        {/* <Header head={pageTitle} /> */}
        <LoginGoogle />
        {/* <LogoutGoogle /> */}
      </div>
    );
  }
}

export default Login;
