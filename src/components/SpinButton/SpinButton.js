import React from 'react';
import './SpinButton.css';

class SpinButton extends React.Component {
  render() {

    return (
      <div className={"SpinButton-root"} onClick={this.props.toggleSpin}>
          <div className={"SpinButton"}>
            SPIN
          </div>
      </div>
    )
  }
}
export default SpinButton;