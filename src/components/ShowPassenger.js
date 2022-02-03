import { FormControlText } from './FormControlText';
import { FormControlAirport } from './FormControlAirport';
import { FormControlDate } from './FormControlDate';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPlusLg } from 'react-icons/bs';

export const ShowPassenger = ({ passenger, handlePassengerChange, handlePassengerAdd, handlePassengerDelete, canDelete }) => {

	const handleChangeField = (key, value) => {
		passenger[key] = value;
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
			<FormControlText label="Name" text={passenger.name} handleChangeField={handleChangeField} />
			<FormControlAirport label="From" airport={passenger.airport} handleChangeField={handleChangeField} />
			<FormControlDate label="Start" propertyName="start" date={passenger.start} handleChangeField={handleChangeField} />
			<FormControlDate label="End" propertyName="end" date={passenger.end} handleChangeField={handleChangeField} />
		</div>
	)
}