export default function Select(props) {

  const {
    name,
    type = "text",
    required,
    placeholder,
    className,
    options
  } = props;

  const option = options.map((option, key)  => {
    return <option value={option.value} key={key}> {option.value} </option>
  });

  return <select name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={className}
          options={options}>
            {option}
        </select>
  
} 