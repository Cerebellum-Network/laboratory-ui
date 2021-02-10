import React, { Component, MouseEvent } from "react";
import axios from "axios";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "./logo.png";
import "./App.css";
import { Navbar } from "react-bootstrap";

class App extends Component {
  state = {
    data: [],
    searchKeyword: "",
    loadingbutton: false,
  };

  handleSearchChange = ({ currentTarget: input }) => {
    this.setState({ searchKeyword: input.value });
  };

  // componentDidMount = () => {
  //   this.getUserList();
  // };

  handleSearch = (e) => {
    e.preventDefault();
    const { searchKeyword } = this.state;
    this.setState({
      loadingbutton: true,
    });
    axios
      .get(`http://localhost:3001/sql/${searchKeyword}`)
      .then(({ data: response }) => {
        this.setState({
          data: response,
          loadingbutton: false,
        });
        console.log(this.state.data);
      });
  };

  render() {
    const { data, loadingbutton, searchKeyword } = this.state;
    return (
      <div className="container-fluid">
        <div className="min-vh-100">
          <Navbar>
            <Navbar.Brand>
              <img
                alt=""
                src={logoImg}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Cere Network
            </Navbar.Brand>
          </Navbar>

          <form autoComplete="off">
            <label htmlFor="search" className="search-form">
              <input
                className="search-input-box"
                value={searchKeyword}
                onChange={this.handleSearchChange}
                id="search"
                autoComplete="off"
              />
              <div className="search-card">
                <button
                  className="search-button white mr-1 "
                  type="submit"
                  onClick={this.handleSearch}
                  disabled={searchKeyword === "" ? true : false}
                >
                  {loadingbutton === true && (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="mr-2"
                      rotation={180}
                      spin
                    />
                  )}
                  {loadingbutton === true && (
                    <span className="f11 white">Processing</span>
                  )}
                  {loadingbutton === false && (
                    <span className="f12">SEARCH</span>
                  )}
                </button>
              </div>
            </label>
          </form>

          <div className="table-responsive">
            {console.log(`length: ${data.length}`)}
            {data.length !== 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time stamp</th>
                    <th scope="col">Block Hash</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Type</th>
                    <th scope="col">Block Number</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{index}</td>
                        <td>{data.timestamp}</td>
                        <td>{data.blockHash}</td>
                        <td>{data.senderId}</td>
                        <td>{data.recipientId}</td>
                        <td>{data.type}</td>
                        <td>{data.height}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="p-5 f40 lato-bold my-auto col-12 bg-light">
                <div className="d-flex justify-content-center">
                  No records found
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
