import React from 'react';
import './Reel.css';

const reelCol = [
    {
        symValue: "1",
        symSrc: require('../../images/3xBAR.png'),
    },
    {
        symValue: "2",
        symSrc: require('../../images/BAR.png'),
    },
    {
        symValue: "3",
        symSrc: require('../../images/2xBAR.png'),
    },
    {
        symValue: "4",
        symSrc: require('../../images/7.png'),
    },
    {
        symValue: "5",
        symSrc: require('../../images/Cherry.png'),
    },
];

class Reel extends React.Component {
    constructor(props){
        super(props);

        this.ReelRef = React.createRef();

        this.state = {
            timeRemaining: 1000,
            isSpinning: true,
            isInitSpin: false,
        };
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler(){
        this.reset();
    }; 

    reset() {
        if (this.timer) { 
          clearInterval(this.timer); 
        }  
        
        this.setState({
          timeRemaining: this.props.timer        
        });
    
        this.timer = setInterval(() => {
          this.tick()
        }, 100);      
    }

    spinReel() {
        this.state.reelCol.unshift(this.state.reelCol.pop());
        
        this.setState({ 
          timeRemaining: this.state.timeRemaining - 100
        })
      }

      getReelResults() {
        const firstResult = this.ReelRef.current.children[1].id;
        const secondResult = this.ReelRef.current.children[2].id;
        const thirdResult = this.ReelRef.current.children[3].id;
        const resultsCol = [firstResult, secondResult, thirdResult];
        this.props.onFinish(resultsCol);
      }

      componentWillMount() {
          this.setState({
              reelCol: [...reelCol],
          })

      }

      componentDidUpdate() {
        if (this.props.isInitSpin != this.state.isInitSpin) {
            this.setState({
                isInitSpin: !this.state.isInitSpin,
                timeRemaining: this.props.timer
            });

            this.timer = setInterval(() => {
                this.tick()
              }, 100);
        }
      }

    componentDidMount() {
        clearInterval(this.timer);
    
        this.setState({
          timeRemaining: this.props.timer
        });
    
        this.timer = setInterval(() => {
          this.tick()
        }, 100);
    }

    tick() {      
        if (this.state.timeRemaining <= 0) {
          clearInterval(this.timer);        
          this.getReelResults();       
        } else {
          this.spinReel();
        }      
      }

    renderReel() {
        return (
            this.state.reelCol.map((sym, i) => {
                return (
                    <img key={i} id={sym.symValue} src={sym.symSrc} style={{width: '100px', height: '100px'}}/>
                )
            })
        );
    }

    render() {
        const { isSpinning } = this.props;

        let { position, current } = this.state;   

        return (
        <div className={"Reel-root"}>
            <div className={"Reel-body"} ref={this.ReelRef}>
                {this.renderReel()}
            </div>
        </div>
        )
    }
}
export default Reel;