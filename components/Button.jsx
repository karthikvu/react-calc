import React from 'react';

class Button extends React.Component {

	constructor(props){
		super(props)
		this.state = {}
	}

	click(){
		if(this.props.type == 'number'){
			this.props.numberClick(this.props.value)
		} else {
			this.props.operatorClick(this.props.value)
		}
		
	}
   render() {
      return (
         <div className="calc-button" onClick={this.click.bind(this)}> 
         	{this.props.value}
         </div>
      );
   }
}

export default Button;