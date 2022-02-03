export const FormControlDate = ({ label, date, handleChangeDate }) => {
	return (
		<div className="control_text">
			<label>{label}</label>
			<input type="date" value={date} onChange={(e) => handleChangeDate(e.target.value)} />
		</div>
	)
}