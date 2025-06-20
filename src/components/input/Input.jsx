import './Input.css';

function Input({ labelName, placeholderText, name, value, onChange }) {
    return(
        <label className="input">{labelName}
            <input
                placeholder={placeholderText}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default Input;