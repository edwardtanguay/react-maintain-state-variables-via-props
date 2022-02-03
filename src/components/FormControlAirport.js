const airports = ['Berlin', 'Hamburg', 'Munich', 'Hannover', 'Düsseldorf'];

export const FormControlAirport = ({ label, airport, handleChangeAirport }) => {

	return (
		<div className="control_airport">
			<label>{label}</label>
			<select value={airport} onChange={(e) => handleChangeAirport(e.target.value)}>
				{airports.map((_airport, index) => (
					<option key={index} value={_airport}>
						{_airport}
					</option>
				))}
			</select>
		</div>
	)
}