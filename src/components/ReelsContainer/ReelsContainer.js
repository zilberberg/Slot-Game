import React from 'react';
import './ReelsContainer.css';
import Reel from '../Reel/Reel.js';

const reelsDictionary = [
    {
        index: 0, ms: 2000
    },
    {
        index: 1, ms: 2500
    },
    {
        index: 2, ms: 3000
    },
];

class ReelsContainer extends React.Component {

    renderReels() {
        return (
            reelsDictionary.map((reel, i) => {
                return (
                    <Reel 
                        isInitSpin={this.props.isInitSpin} 
                        isSpinning timer={reel.ms} 
                        onFinish={this.props.finishHandler} 
                        isDebugMode={this.props.isDebugMode}
                        debugConfig={this.props.debugConfig[i]}
                    />
                )
            })
        );
    }

  render() {
    const { isSpinning } = this.props;

    return (
      <div className={"ReelsContainer-root"}>
          {this.renderReels()}
      </div>
    )
  }
}
export default ReelsContainer;