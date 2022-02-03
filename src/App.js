import { useEffect, useState } from 'react';
import { ShowPassenger } from './components/ShowPassenger';
import './App.scss';

const _emptyPassenger = {
	id: 0,
	genericTitle: '',
	name: '',
	airport: 'Berlin',
	tripStartDate: '',
	tripEndDate: ''
};

const fillDataIntoPassengers = (passengers) => {
	passengers.forEach((passenger, index) => {
		passenger.id = index;
		passenger.genericTitle = `Passenger #${index + 1}`;
	});
	return passengers;
}

function App() {
	const [passengers, setPassengers] = useState([]);

	useEffect(() => {
		const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
		setPassengers([...fillDataIntoPassengers(_passengers)]);
	}, []);

	const handlePassengerChange = (passenger) => {
		passengers[passenger.index] = passenger;
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
