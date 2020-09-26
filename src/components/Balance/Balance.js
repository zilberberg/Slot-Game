import React from 'react';
import './Balance.css';

class Balance extends React.Component {
  render() {
    const { balance } = this.props;
    return (
      <div className={"Text-container"}>
          <span>{balance}</span>
      </div>
    )
  }
}
export default Balance;