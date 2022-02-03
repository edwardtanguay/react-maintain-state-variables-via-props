export const FormControlText = ({ label, text, handleChangeField }) => {
	return (
		<div className="control_text">
			<label>{label}</label>
			<input type="text" value={text} onChange={(e) => handleChangeField('name', e.target.value)} />
		</div>
	)
}