import React from "react";

function accountList(props) {
  function data(isData) {
    if (isData) {
      return isData;
    } else {
      return `NA`;
    }
  }

  return (
    <div className="card mb-3 rounded shadow ">
      <div className="card-body">
        <h6 className="mb-3">
          {" "}
          <span className="fa fa-address-book mr-1"></span> {props.accnum}
        </h6>
        <p className="d-flex">
          {" "}
          <span className="fa fa-list-alt mt-1 mr-2"> </span>{" "}
          {data(props.trascn)}
        </p>
        <p>
          {" "}
          <span className="title-small">Withdraw - </span>{" "}
          <span className="fa fa-rupee mr-1"> </span> {data(props.wthdAmt)}
        </p>
        <p>
          {" "}
          <span className="title-small">Deposit - </span>{" "}
          <span className="fa fa-rupee mr-1"> </span>
          {data(props.depAmt)}
        </p>
        <p>
          {" "}
          <span className="title-small">Balance - </span>
          <span className="fa fa-rupee mr-1"> </span>
          {data(props.balAmt)}
        </p>
        <div className="badge badge-warning">
          {" "}
          <span className="fa fa-calendar"> </span> {data(props.date)}
        </div>
      </div>
    </div>
  );
}

export default accountList;
