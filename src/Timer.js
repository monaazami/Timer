import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);

        this.state={
            clock:0
        };
        this.ticker= this.ticker.bind(this);
    }
    componentDidMount(){
        this.timer = setInterval(this.ticker,1000);
    }

    ticker(){
        this.setState({clock: new Date() - this.props.start})
    }
    

	render() {
        var clock=Math.floor(this.state.clock/1000)
		return (
			<div>
				<p>You have been in this site since:</p>
				<span>{clock}</span>
				<p>Seconds.</p>
			</div>
		);
	}
}
export default Timer;