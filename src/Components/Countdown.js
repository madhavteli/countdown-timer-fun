import React, { useState } from 'react';

const Countdown = (props) => {
	let [count, setCount] = useState(props.number ? props.number : 30);
	const decreaseCount = () => {
		console.log(count);
		if(count > 0){
			count--;
			setCount(count);
		}else{
			clearInterval(interval)
		}
	}
	let interval = setInterval(decreaseCount, 1000);
	return (
		<div style={{textAlign:'center'}}>
		<h1>{count}</h1>
		{count === 0 && <p>Time's up!</p>}
		</div>
	)
}

export default Countdown;