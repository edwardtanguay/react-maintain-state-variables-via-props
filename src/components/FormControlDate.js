export const FormControlDate = ({ label, propertyName, date, handleChangeField }) => {
	return (
		<div className="control_text">
			<label>{label}</label>
			<input type="date" value={date} onChange={(e) => handleChangeField(propertyName, e.target.value)} />
		</div>
	)
}