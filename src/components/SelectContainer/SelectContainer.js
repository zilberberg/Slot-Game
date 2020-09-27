import React from 'react';
import './SelectContainer.css';



class SelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.options[0].value,
        };

    }


    handleChange(event) {
        this.props.handleChange(event.target.value);
        this.setState({
            value: event.target.value,
        })
    }

    render() {
        const { options } = this.props;
        return (
        <div className={"Select-root"}>
            <select value={this.state.value} onChange={this.handleChange.bind(this)}>
                {
                    options.map((result, i) => {
                        return (
                            <option key={i} value={result.value}>{result.label}</option>
                        )
                    })
                }
            </select>
        </div>
        )
    }
}
export default SelectContainer;