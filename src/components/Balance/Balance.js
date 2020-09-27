import React from 'react';
import './Balance.css';

class Balance extends React.Component {
  render() {
    const { balance } = this.props;
    return (
      <div className={"Balance-container"}>
          <div className={"Balance-text-container"}>{"Current balance: " + balance}</div>
      </div>
    )
  }
}
export default Balance;