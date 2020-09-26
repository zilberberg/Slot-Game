import React from 'react';
import './ReelsContainer.css';
import Reel from '../Reel/Reel.js';

class ReelsContainer extends React.Component {
  render() {
    const { isSpinning } = this.props;

    return (
      <div className={"ReelsContainer-root"}>
          <Reel isSpinning/>
          <Reel isSpinning/>
          <Reel isSpinning/>
      </div>
    )
  }
}
export default ReelsContainer;