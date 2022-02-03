import { FormControlText } from './FormControlText';
import { FormControlAirport } from './FormControlAirport';
import { FormControlDate } from './FormControlDate';

export const ShowPassenger = ({ passenger, handlePassengerChange }) => {

	const handleChangeName = (name) => {
		passenger.name = name;
		handlePassengerChange(passenger);
	}

	const handleChangeAirport = (airport) => {
		passenger.airport = airport;
		handlePassengerChange(passenger);
	};

	const handleChangeStart = (start) => {
		passenger.start = start;
		handlePassengerChange(passenger);
	}

	const handleChangeEnd = (end) => {
		passenger.end = end;
		handlePassengerChange(passenger);
	}

	return (
		<div className="control_showPassenger">
			<h2>{passenger.genericTitle}</h2>
			<FormControlText label="Name" text={passenger.name} handleChangeText={handleChangeName} />
			<FormControlAirport label="From" airport={passenger.airport} handleChangeAirport={handleChangeAirport} />
			<FormControlDate label="Start" date={passenger.start} handleChangeDate={handleChangeStart} />
			<FormControlDate label="End" date={passenger.end} handleChangeDate={handleChangeEnd} />
		</div>
	)
}