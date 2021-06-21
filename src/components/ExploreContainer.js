import React from "react";
import Axios from "axios";
// import Table from "../components/TableComponent.js";
import Placeholder from "./PlaceholderComponent";
import Explore from "./ExploreComponent";
import { useHistory } from "react-router-dom";
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
import "bootstrap/dist/css/bootstrap.min.css";
import ls from "local-storage";
class ExploreContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryItem: [],
      eventItem: [],
      chosenCat: 2,
      selectedCategoryId: null,
    };
  }

  componentDidMount() {
    // this.setState({ chosenCat: ls.get("testvalues") });
    Axios.get("http://localhost:3001/events/")
      .then((events) => {
        this.setState({ eventItem: events.data });
        console.log(events.data);
      })
      .catch((err) => console.log(err));

    Axios.get("http://localhost:3001/categories/")
      .then((categories) => {
        this.setState({ categoryItem: categories.data });
        console.log(categories.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { categoryItem, eventItem, selectedCategoryId, chosenCat } =
      this.state;
    const pageTitle = "Upplev";
    const myStyle = {
      margin: "auto",
      width: "360px",
    };
    return (
      <div className="App">
        <title>{pageTitle}</title>
        <br></br>
        <div style={myStyle}>
          <Menu compact icon="labeled">
            {this.state.categoryItem.length > 0 ? (
              this.state.categoryItem.slice(0, 10).map((categoryItm, index) => {
                return (
                  <Menu.Item
                    onClick={() =>
                      this.setState({
                        chosenCat: categoryItm.categoryId,
                      })
                    }
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
        <Placeholder chosenCat={chosenCat} eventItem={eventItem} />
      </div>
    );
  }
}
export default ExploreContainer;
