import React from "react";
import Axios from "axios";
import Header from "../components/HeaderComponent";
import Placeholder from "../components/PlaceholderComponent";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Icon, Menu } from "semantic-ui-react";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItem: [],
      pageTitle: "Upplev",
      pageDescription: "Här listas platser att besöka",
    };
  }
  // page content

  componentDidMount() {
    Axios.get("http://localhost:3001/categories/")
      .then((categories) => {
        this.setState({ categoryItem: categories.data });
        console.log(categories.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const myStyle = {
      margin: "auto",
      width: "360px",
    };
    return (
      <div style={myStyle}>
        <title>{this.state.pageTitle}</title>

        <Menu compact icon="labeled">
          {this.state.categoryItem.length > 0 ? (
            this.state.categoryItem.slice(0, 10).map((categoryItm, index) => {
              return (
                <Menu.Item
                  name={categoryItm.categoryName}
                  id={categoryItm.categoryId}
                  //   active={activeItem === "gamepad"}
                  //   onClick={this.handleItemClick}
                >
                  <Icon name={categoryItm.categoryNameIcon} />
                  {categoryItm.categoryName}
                </Menu.Item>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">Inget att visa för tillfället</td>
            </tr>
          )}
        </Menu>
      </div>
    );
  }
}

export default TableContainer;
