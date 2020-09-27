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
            speed: 80,
            offsetSpeed: 50,
            isSpinning: true,
            isInitSpin: false,
            position: 0,
            reelTop: "",
        };

        let effectTimer;
    };

    forceUpdateHandler(){
        this.reset();
    }; 

    reset() {
        if (this.timer) { 
          clearInterval(this.timer); 
        }  
        
        this.setState({
            isInitSpin: !this.state.isInitSpin,
            timeRemaining: this.props.timer        
        });
    
        this.timer = setInterval(() => {
          this.tick()
        }, this.state.speed);
    }
    
    offsetReel() {
        // debugger
        this.ReelRef.current.style.cssText = "transition: none; top: -200px;";
        this.state.reelCol.unshift(this.state.reelCol.pop());

        clearTimeout(this.effectTimer);
    }

    offsetTimer() {
        this.effectTimer = setTimeout(() => {
            this.offsetReel();
        }, this.state.offsetSpeed);
    };

    spinReel() {      
        this.ReelRef.current.style.cssText = "transition: 0.1s ease; top: -100px;";

        this.offsetTimer();

        this.setState({ 
          timeRemaining: this.state.timeRemaining - this.state.speed,
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
            this.forceUpdateHandler();
        }
    }

    componentDidMount() {
        this.reset();
    }

    tick() {      
        if (this.state.timeRemaining <= 0) {
            if (this.props.isDebugMode) {
                if (this.ReelRef.current.children[parseInt(this.props.debugConfig[1]) + 1].id == this.props.debugConfig[0]) {
                    clearInterval(this.timer);     
                    this.getReelResults();   
                } else {
                    this.manualSpin();
                }                
            } else {
                this.getReelResults();     
                clearInterval(this.timer);          
            }
        } else {
          this.spinReel();
        }      
    }

    manualSpin() {
        this.setState({ 
            timeRemaining: this.state.timeRemaining + this.state.speed,
        })
    }

    renderReel() {
        return (
            this.state.reelCol.map((sym, i) => {
                return (
                    <img className={"Reel-img"} key={i} id={sym.symValue} src={sym.symSrc} style={{width: '100px', height: '100px'}}/>
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