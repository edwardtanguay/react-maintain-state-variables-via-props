export const FormControlText = ({ label, text, handleChangeText }) => {
	return (
		<div className="control_text">
			<label>{label}</label>
			<input type="text" value={text} onChange={(e) => handleChangeText(e.target.value)} />
		</div>
	)
}