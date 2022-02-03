import { FormControlText } from './FormControlText';
import { FormControlAirport } from './FormControlAirport';

export const ShowPassenger = ({ passenger, handlePassengerChange }) => {

	const handleChangeName = (name) => {
		passenger.name = name;
		handlePassengerChange(passenger);
	}
	const handleChangeAirport = (airport) => {
		passenger.airport = airport;
		handlePassengerChange(passenger);
	};

	return (
		<div className="control_showPassenger">
			<h2>{passenger.genericTitle}</h2>
			<FormControlText label="Name" text={passenger.name} handleChangeText={handleChangeName} />
			<FormControlAirport label="From" airport={passenger.airport} handleChangeAirport={handleChangeAirport}/>

			
		</div>
	)
}