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
                const arr = [...this.props.winsPositions[i]];
                if (arr.length > 0) {
                    // debugger
                }
                return (
                    <Reel 
                        key={i}
                        id={i+1}
                        isInitSpin={this.props.isInitSpin} 
                        timer={reel.ms} 
                        onFinish={(e) => this.props.finishHandler(e, i == 2)} 
                        isDebugMode={this.props.isDebugMode}
                        debugConfig={this.props.debugConfig[i]}
                        winsPositions={arr}
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