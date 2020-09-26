import React from 'react';
import './Reel.css';

const reelCol = [
    {
        symValue: "",
        symSrc: require('../../images/3xBAR.png'),
    },
    {
        symValue: "",
        symSrc: require('../../images/BAR.png'),
    },
    {
        symValue: "",
        symSrc: require('../../images/2xBAR.png'),
    },
    {
        symValue: "",
        symSrc: require('../../images/7.png'),
    },
    {
        symValue: "",
        symSrc: require('../../images/Cherry.png'),
    },
];

class Reel extends React.Component {
    renderReel() {

        reelCol.unshift(reelCol.pop());
        return (
            reelCol.map((sym, i) => {
                return (
                    <img key={i} src={sym.symSrc} style={{width: '100px', height: '100px'}}/>
                )
            })
        );
    }

  render() {
      const { isSpinning } = this.props;

    return (
      <div className={"Reel-root"}>
          <div className={"Reel"}>
          {this.renderReel()}
          </div>
      </div>
    )
  }
}
export default Reel;