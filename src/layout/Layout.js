import { BrowserRouter as Router } from "react-router-dom";

// components
import Menu from "../components/MenuComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";

const Layout = ({ children }) => {
  return (
    <Router>
      <Menu />
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Router>
  );
};

export default Layout;
