import React from 'react';
import './SpinButton.css';

class SpinButton extends React.Component {
  render() {

    return (
      <div className={"SpinButton-root"} onClick={this.props.toggleSpin}>
          SPIN
      </div>
    )
  }
}
export default SpinButton;