export default function Checkbox(props) {
  const {
    name,
    type = "checkbox",
    value,
    required,
    className, 
    id
  } = props;
 
  return (
      <input name={name}
        type={type}
        value={value}
        required={required}
        className={className} 
        id={id}
      />
  )
}