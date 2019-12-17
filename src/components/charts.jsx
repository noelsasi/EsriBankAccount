import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["withdrawls", "Deposit", "Balance"],
        datasets: [
          {
            label: "Amount in rupees",
            data: [22509902, 27000002, 32220100],
            backgroundColor: ["#F1C40F", "#C39BD3", "#E67E22"]
          }
        ]
      }
    };
  }

  render() {
    console.log(this.props.wdData, this.props.balance, this.props.depositData);
    return (
      <div className="charts mt-3">
        <Bar
          data={this.state.chartData}
          height="500px"
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      </div>
    );
  }
}

export default charts;
