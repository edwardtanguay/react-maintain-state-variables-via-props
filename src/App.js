import { useEffect, useState } from 'react';
import './App.scss';

const _emptyPassenger = {
	name: '',
	airport: '',
	tripStartDate: '',
	tripEndDate: ''
};

const renamePassengers = (passengers) => {
	passengers.forEach((passenger, index) => {
		passenger.name = `Passenger #${index + 1}`;
	});
	return passengers;
}

function App() {
	const [passengers, setPassengers] = useState([]);

	useEffect(() => {
		const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
		console.log(passengers);
		setPassengers([...passengers]);
	}, []);


	return (
		<div className="App">
			<h1>{passengers.length} Passengers:</h1>
			{passengers.map((passenger, index) => {
				return (
					<div key={index}>{passenger.name}</div>
				)
			})}
		</div>
	);
}

export default App;
