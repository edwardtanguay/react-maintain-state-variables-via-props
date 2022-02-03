export const FormControlDate = ({ label, date, handleChangeDate }) => {
	return (
		<div className="control_text">
			<label>{label}</label>
			<input type="text" value={date} onChange={(e) => handleChangeDate(e.target.value)} />
		</div>
	)
}