import "./FormInput.css";

function FormInput(props) {
  const { label, errorMessage, onChange, id, ...others } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...others} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
