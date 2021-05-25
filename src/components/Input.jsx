import PropTypes from "prop-types";

export default function Input({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <div>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control shadow-none"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary shadow-none"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-brand shadow-none"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: "input",
  type: "text",
};
