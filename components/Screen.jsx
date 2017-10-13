import React from 'react';

class Screen extends React.Component {
    render() {
        return (
            <div className="calc-screen" >
                <div className="operand_1">{this.props.operand_1}</div>
                <div className="operator">{this.props.operator}</div>
                <div className="operand_2">{this.props.operand_2}</div>
                <div className="result">{this.props.result}</div>
            </div>
        );
    }
}

export default Screen;