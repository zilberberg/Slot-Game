import React from 'react';
import './Debug.css';
import SelectContainer from '../SelectContainer/SelectContainer';

const reelsDictionary = [
    {title: "Left", value: 0},
    {title: "Middle", value: 1},
    {title: "Right", value: 2},
];

const resultsOptions = [
    { value: '3', label: '2xBAR' },
    { value: '1', label: '3xBAr' },
    { value: '4', label: '7' },
    { value: '2', label: 'BAR' },
    { value: '5', label: 'Cherry' },
]

const positionOptions = [
    { value: '0', label: 'Top' },
    { value: '1', label: 'Middle' },
    { value: '2', label: 'Bottom' },
];


class Debug extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    renderReelsOptions() {
        
        return(
            reelsDictionary.map((reel, i) => {
                return (
                    <div className={"col-style"} key={i}>
                        {reel.title + " Reel"}
                        <div className={"row-style"}>
                            <SelectContainer options={resultsOptions} handleChange={(e) => this.props.onConfigChange(e, i, 0)}/>
                            <SelectContainer options={positionOptions} handleChange={(e) => this.props.onConfigChange(e, i, 1)}/>
                        </div>
                    </div>
                )
            })
        )
    }

  render() {
    const { isDebugMode } = this.props;

    return (
      <div className={"Debug-root"}>
          <div className={"row-style"}>
            {"DEBUG"}
          </div>
          
            <div className={"row-style"}>
                <div className={"Toggle-button"} onClick={this.props.toggleMode}>
                    {"Toggle Mode"}
                </div>
                <div>
                    {isDebugMode ? "Fixed Mode" : "Random Mode"}
                </div>
            </div>     

            {
                isDebugMode &&
                <div className={"row-style"}>
                    {this.renderReelsOptions()}
                </div>
            }     
      </div>
    )
  }
}
export default Debug;