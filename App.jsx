import React from 'react';
import Button from './components/Button.jsx'
import Screen from './components/Screen.jsx'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			operand_1: "",
			operand_2: "",
			operator: "",
			result: ""
		}
	}

	calculateResult(state) {
		state.result = eval(state.operand_1 + state.operator + state.operand_2);
	}
	numberClick(value) {
		console.log(value)
		var result;
		if (this.state.operator == null || this.state.operator == '') {
			this.state.operand_1 += value;
		} else {
			this.state.operand_2 += value;

			if (this.state.operator == '/' && this.state.operand_2 == 0) {
				this.state.result = "Cannot divide by Zero !";
			} else {
				result = eval(this.state.operand_1 + this.state.operator + this.state.operand_2);
			}
		}

		this.setState({ operand_1: this.state.operand_1 })
		this.setState({ operand_2: this.state.operand_2 })
		this.setState({ result })
		console.log(this.state)
	}

	operatorClick(op) {
		if (op == 'Clear') {
			this.setState({
				operand_1: "",
				operand_2: "",
				operator: "",
				result: ""
			})
			return;
		}

		if (op == 'Backspace') {
			var result;
			var op2;
			var op1;
			if (this.state.operand_2 && this.state.operand_2.length > 0) {
				console.log(this.state.operand_2)
				op2 = this.state.operand_2.substring(0, this.state.operand_2.length - 1)
				this.setState({
					operand_2: op2
				})
				result = eval(this.state.operand_1 + this.state.operator + op2);
				this.setState({ result })
				console.log(result)
			} else {
				result = "";
				this.setState({ result })
				if (this.state.operator != '') {
					this.state.operator = "";
				} else {
					if (this.state.operand_1 != '') {
						op1 = this.state.operand_1.substring(0, this.state.operand_1.length - 1)
						this.setState({
							operand_1: op1
						})
					}
				}
			}

			return;
		}

		if (this.state.operand_1 == '') {
			return;
		}

		if (this.state.operand_2 != '') {
			return;
		}

		this.setState({
			operator: op
		})
	}
	render() {
		var buttonList = [];
		for (var i = 1; i < 11; i++) {
			buttonList.push(<Button key={i % 10} value={i % 10} type="number" numberClick={this.numberClick.bind(this)}></Button>)
		}

		var operatorList = [];
		var app = this;
		['+', '-', '*', '/', 'Clear', 'Backspace'].forEach(function (o) {
			operatorList.push(<Button key={o} value={o} type="operator" operatorClick={app.operatorClick.bind(app)}></Button>)
		})
		return (
			<div className="panel">
				<Screen operand_1={this.state.operand_1} operand_2={this.state.operand_2} operator={this.state.operator} result={this.state.result}></Screen>
				<hr></hr>
				{operatorList}
				<hr></hr>
				{buttonList}
			</div>
		);
	}
}

export default App;