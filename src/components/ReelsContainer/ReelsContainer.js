import React from 'react';
import './ReelsContainer.css';
import Reel from '../Reel/Reel.js';

class ReelsContainer extends React.Component {


  render() {
    const { isSpinning } = this.props;

    return (
      <div className={"ReelsContainer-root"}>
          <Reel isInitSpin={this.props.isInitSpin} isSpinning timer={1000} onFinish={this.props.finishHandler}/>
          <Reel isInitSpin={this.props.isInitSpin} isSpinning timer={1400} onFinish={this.props.finishHandler}/>
          <Reel isInitSpin={this.props.isInitSpin} isSpinning timer={2200} onFinish={this.props.finishHandler}/>
      </div>
    )
  }
}
export default ReelsContainer;