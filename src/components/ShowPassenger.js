import { FormControlText } from './FormControlText';
import { FormControlAirport } from './FormControlAirport';
import { FormControlDate } from './FormControlDate';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPlusLg } from 'react-icons/bs';

export const ShowPassenger = ({ passenger, handlePassengerChange, handlePassengerAdd, handlePassengerDelete, canDelete }) => {

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
			<div className="header">
				<h2>{passenger.genericTitle}</h2>
				{!canDelete && (
					<RiDeleteBin6Line className='iconDisabled' />
				)}
				{canDelete && (
					<RiDeleteBin6Line className='icon' onClick={() => handlePassengerDelete(passenger.id)} />
				)}
				<BsPlusLg className="icon" onClick={handlePassengerAdd} />
			</div>
			<FormControlText label="Name" text={passenger.name} handleChangeText={handleChangeName} />
			<FormControlAirport label="From" airport={passenger.airport} handleChangeAirport={handleChangeAirport} />
			<FormControlDate label="Start" date={passenger.start} handleChangeDate={handleChangeStart} />
			<FormControlDate label="End" date={passenger.end} handleChangeDate={handleChangeEnd} />
		</div>
	)
}