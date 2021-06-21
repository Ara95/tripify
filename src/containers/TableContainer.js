import React from "react";
import Axios from "axios";
import Table from "../components/TableComponent.js";
import "bootstrap/dist/css/bootstrap.min.css";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationItem: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Changing state
    this.setState({ locationItem: 0 }, () => {
      this.loadData();
    });
  }

  loadData() {
    Axios.get("http://localhost:3001/locations/")
      .then((locations) => {
        this.setState({ locationItem: locations.data });
        console.log(locations.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { locationItem } = this.state;
    const pageTitle = "Home";
    return (
      <div className="App">
        <title>{pageTitle}</title>
        <br></br>
        <button onClick={this.handleClick}>Click to load data!</button>
        <Table locationItem={locationItem} />
      </div>
    );
  }
}
export default TableContainer;
