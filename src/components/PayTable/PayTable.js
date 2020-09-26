import React from 'react';
import './PayTable.css';

class PayTable extends React.Component {
  render() {
    const { pay } = this.props;
    return (
      <div className={"Text-container"}>
          <span>{pay}</span>
      </div>
    )
  }
}
export default PayTable;