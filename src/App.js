import React from 'react';
import './App.css';

import Balance from './components/Balance/Balance.js';
import PayTable from './components/PayTable/PayTable';
import SpinButton from './components/SpinButton/SpinButton';
import ReelsContainer from './components/ReelsContainer/ReelsContainer';
import Debug from './components/Debug/Debug';

const consecutivePayDictionary = {
  5: {
    0: 2000,
    1: 1000,
    2: 4000,
  },
  4: 150,
  1: 50,
  3: 20,
  2: 10, 
};

const combinationPayDictionary = {
  5: 75,
  4: 75,
  2: 5,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      pay: 0,
      isSpinning: false,

      results: [],
      combinedResults: [],
      isInitSpin: false,
      isDebugMode: false,

      // first tier = Reel
      // third tier = result , position
      debugConfig: {
        0: {
            0: "3",
            1: "0",
        },
        1: {
            0: "3",
            1: "0",
        },
        2: {
            0: "3",
            1: "0",
        }
      }
    };

    this.finishHandler = this.finishHandler.bind(this);
    this.toggleSpin = this.toggleSpin.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.handleDebugConfig = this.handleDebugConfig.bind(this);
}



finishHandler(reelResults) {
  this.setState({
    results: [...this.state.results, [...reelResults]]
  });
}

toggleSpin() {
  this.setState({
    isInitSpin: !this.state.isInitSpin,
  });

}

componentDidUpdate() {
  if (this.state.results.length == 3) {
    this.combineResults();
  }

  if (this.state.combinedResults.length == 9) {
    this.checkResults();
  }
}

checkResults() {
  const consecutivePay = this.checkConsecutiveResults();
  const comboPay = this.checkCombination();

  // debugger
  this.setState({
    pay: consecutivePay + comboPay,
    balance: this.state.balance + consecutivePay + comboPay,
    results: [],
    combinedResults: [],
  })
}

checkConsecutiveResults() {
  let cunsecutivePay = 0;
  for (let i = 0; i < 3; i++) {
    let selectedCounter = i * 3;
    if (this.state.combinedResults[selectedCounter] == this.state.combinedResults[selectedCounter + 1] &&
      this.state.combinedResults[selectedCounter + 1] == this.state.combinedResults[selectedCounter + 2]) {
        
        if (consecutivePayDictionary[this.state.combinedResults[selectedCounter]]) {
          if (consecutivePayDictionary[this.state.combinedResults[selectedCounter]][i]) {
            cunsecutivePay += consecutivePayDictionary[this.state.combinedResults[selectedCounter]][i];
          } else {
            cunsecutivePay += consecutivePayDictionary[this.state.combinedResults[selectedCounter]];
          }
        }
    } 
  }

  return cunsecutivePay;
}

checkCombination() {
  let comboPay = 0;
  let comboSum = {
    2: 0, 4: 0, 5: 0
  };

  for (let i = 0; i < this.state.combinedResults.length; i++) {
    if (combinationPayDictionary[this.state.combinedResults[i]]) {
      comboSum[this.state.combinedResults[i]]++;
    }
  }

  Object.keys(comboSum).map((key) => {
    if (comboSum[key] == 3) {
      comboPay += combinationPayDictionary[key];
    }
  })

  return comboPay;
}

combineResults() {
  let combinedResults = [];

  // combine results to 1 array
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      combinedResults.push(this.state.results[j][i]);
    }
  }
  this.setState({
    combinedResults: combinedResults,
  })
}

startSpin() {
  this.setState({
    isSpinning: true,
  })
}

toggleMode() {
  this.setState({
    isDebugMode: !this.state.isDebugMode,
  })
}

handleDebugConfig(value, reelNum, ruleType) {
  let config = this.state.debugConfig;
  config[reelNum][ruleType] = value;

  this.setState({
      debugConfig: config
  });
}


  render() {
    return (
      <div className={"App-root"}>
        <div className={"App-container"}>
          <div className={"rowStyle"}>
            <Balance balance={this.state.balance}/>
            <PayTable pay={this.state.pay}/>
            <SpinButton toggleSpin={this.toggleSpin}/>
          </div>
          <div className={"rowStyle"}>
            <ReelsContainer 
            isSpinning={this.state.isSpinning} 
            finishHandler={this.finishHandler} 
            firstReel={this.state.firstReel} 
            secondReel={this.state.secondReel} 
            thirdReel={this.state.thirdReel}
            isInitSpin={this.state.isInitSpin}
            isDebugMode={this.state.isDebugMode}
            debugConfig={this.state.debugConfig}
            />
          </div>
          <div className={"rowStyle"}>
            <Debug isDebugMode={this.state.isDebugMode} toggleMode={this.toggleMode} onConfigChange={this.handleDebugConfig}/>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;