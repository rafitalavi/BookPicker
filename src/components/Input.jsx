// src/components/Input.jsx
export default function Input({ label, id, error, className, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} className={className} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
