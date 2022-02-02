const _airports = ['Berlin', 'Hamburg', 'Munich', 'Hannover'];

export const AirportControl = ({ label, airport }) => {
	return (
		<div className="control_airport">
			<label>
				<h5>{label}</h5>
			</label>
			<input
				placeholder="Choose an airport"
				list="opts"
				value={airport}
			// onChange={(e) => handleAirport(e.target.value)}
			/>
			<datalist id="opts">
				{_airports.map((_airport, index) => (
					<option key={index} value={_airport}>
						{_airport}
					</option>
				))}
			</datalist>
		</div>
	)
}