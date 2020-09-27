import React from 'react';
import './PayTable.css';

class PayTable extends React.Component {
  render() {
    const { pay } = this.props;
    return (
      <div className={"Pay-container"}>
          <div className={this.props.isPaid ? "Blink-effect" : ""}/>
          <div className={"Pay-text-container"}>{"Current pay: " + pay}</div>
      </div>
    )
  }
}
export default PayTable;