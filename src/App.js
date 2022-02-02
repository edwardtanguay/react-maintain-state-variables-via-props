import { useEffect, useState } from 'react';
import { ShowPassenger } from './components/ShowPassenger';
import './App.scss';

const _emptyPassenger = {
	name: '',
	airport: 'Berlin',
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
		setPassengers([...renamePassengers(_passengers)]);
	}, []);

	const handlePassengerChange = (passenger) => {
		passengers[0] = passenger;
		setPassengers([...passengers]);
	}

	return (
		<div className="App">
			<h1>{passengers.length} Passengers:</h1>
			{passengers.map((passenger, index) => {
				return (
					<ShowPassenger key={index} passenger={passenger} handlePassengerChange={handlePassengerChange} />
				)
			})}
			<pre>
				{JSON.stringify(passengers, null, 2)}
			</pre>
		</div>
	);
}

export default App;
