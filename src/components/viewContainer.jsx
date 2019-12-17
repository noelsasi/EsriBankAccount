import React, { Component } from "react";
import axios from "axios";
import List from "./accountList";
import Pagination from "./pagination";
import Search from "./search";
import Charts from "./charts";

class ViewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankData: [],
      currentPage: 1,
      itemsPerPage: 12,
      searchData: []
    };

    this.searchResults = this.searchResults.bind(this);
  }

  componentDidMount() {
    axios
      .get("/bankAccount")
      .then(response => {
        console.log(response.data);
        this.setState({ bankData: response.data, searchData: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  searchResults(searchText) {
    const regex = new RegExp(searchText, "gi");
    const lists = this.state.bankData;
    const searchtrcsn = lists.filter(list => {
      return list["Transaction Details"].match(regex);
    });

    this.setState({
      searchData: searchtrcsn
    });
  }

  render() {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItem = this.state.searchData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    // getting current page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const listContainer = currentItem.map((list, index) => (
      <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6" key={index}>
        {" "}
        <List
          accnum={list["Account No"]}
          trascn={list["Transaction Details"]}
          wthdAmt={list["Withdrawal AMT"]}
          depAmt={list["Deposit AMT"]}
          balAmt={list["Balance AMT"]}
          date={list.Date}
        />
      </div>
    ));

    const wdData = this.state.bankData.filter(list => {
      return list["Withdrawal AMT"] > 0;
    });

    const depositData = this.state.bankData.map(list => {
      return list["Deposit AMT"] > 0;
    });

    const balance = this.state.bankData.map(list => {
      return list["Balance AMT"] > 0;
    });

    // console.log(wdData);
    return (
      <div className="container mx-auto mt-5 col-12 row">
        <div className="list-container col-lg-8 col-12">
          <div className="filters">
            <Search searchResults={this.searchResults} />
          </div>

          <div className="list-wrapper col-md-12 row">{listContainer}</div>
          <div className="pagination ml-4">
            <Pagination
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.state.bankData.length}
              paginate={paginate}
            />
          </div>
        </div>
        <div className="charts col-lg-4 col-12">
          <div className="wrapper">
            <Charts
              wdData={wdData.length}
              depositData={depositData.length}
              balance={balance.length}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContainer;
