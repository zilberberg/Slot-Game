import React from 'react';
import './App.css';

import Balance from './components/Balance/Balance.js';
import PayTable from './components/PayTable/PayTable';
import SpinButton from './components/SpinButton/SpinButton';
import ReelsContainer from './components/ReelsContainer/ReelsContainer';
import Debug from './components/Debug/Debug';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      pay: 0,
      isSpinning: false,
    };
}

startSpin() {
  this.setState({
    isSpinning: true,
  })
}

  render() {
    return (
      <div className={"App-root"}>
        <div className={"App-container"}>
          <div className={"rowStyle"}>
            <Balance balance={this.state.balance}/>
            <PayTable pay={this.state.pay}/>
            <SpinButton startSpin/>
          </div>
          <div className={"rowStyle"}>
            <ReelsContainer isSpinning={this.state.isSpinning}/>
          </div>
          <div className={"rowStyle"}>
            <Debug/>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;