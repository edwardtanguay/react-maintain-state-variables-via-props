import { AirportControl } from './AirportControl';

export const ShowPassenger = ({ passenger, handlePassengerChange }) => {
	const handleChangeAirport = (airport) => {
		passenger.airport = airport;
		handlePassengerChange(passenger);
	};

	return (
		<div className="control_showPassenger">
			<h2>{passenger.name}</h2>
			<AirportControl label="From" airport={passenger.airport} handleChangeAirport={handleChangeAirport}/>

			
		</div>
	)
}