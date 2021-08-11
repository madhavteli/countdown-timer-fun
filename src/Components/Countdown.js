import React, { Component } from 'react';

class Countdown extends Component {
	state = {
		count: this.props.number ? this.props.number : 30
	}

	interval = null;

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState(({ count }) => ({ count: count - 1 }));
		}, 1000);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextState.count < 1) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { count } = this.state;
		return (
			<div style={{textAlign:'center'}}>
				<h1>{count}</h1>
				{count === 0 && <p>Time's up!</p>}
			</div>
		)
	}
}

export default Countdown;
