import React, { useState, useEffect } from 'react';

const Countdown = ( props ) => {
	let   [count, setCount] = useState( props.number ? props.number : 30 );

	useEffect(()=> {
		const interval = setInterval( () => {
			if(count > 0 ){



				setCount(--count);
			}
		}, 1000 );

		return () => clearInterval( interval );

	}, [count]);

	return (
		<div style={{ textAlign: 'center' }}>

			<h1>{count}</h1>
			{count === 0 && <p>Time's up!</p>}
		</div>
	);
};

export default Countdown;