import { FormControlAirport } from './FormControlAirport';

export const ShowPassenger = ({ passenger, handlePassengerChange }) => {
	const handleChangeAirport = (airport) => {
		passenger.airport = airport;
		handlePassengerChange(passenger);
	};

	return (
		<div className="control_showPassenger">
			<h2>{passenger.name}</h2>
			<FormControlAirport label="From" airport={passenger.airport} handleChangeAirport={handleChangeAirport}/>

			
		</div>
	)
}