import { useState } from 'react';

const _airports = ['Berlin', 'Hamburg', 'Munich', 'Hannover', 'Düsseldorf'];

export const AirportControl = ({ label, airport, handleChangeAirport }) => {
	// const [airport, setAirport] = useState(_airport);

	return (
		<div className="control_airport">
			<label>{label}</label>
			{/* <input
				placeholder="Choose an airport"
				list="opts"
				value={airport}
			onChange={(e) => handleChangeAirport(e.target.value)}
			/>
			<datalist id="opts">
				{_airports.map((_airport, index) => (
					<option key={index} value={_airport}>
						{_airport}
					</option>
				))}
			</datalist> */}
			<select value={airport} onChange={(e) => handleChangeAirport(e.target.value)}>
				{_airports.map((_airport, index) => (
					<option key={index} value={_airport}>
						{_airport}
					</option>
				))}
			</select>
		</div>
	)
}