import Select from "react-select";

export default function CustomSelect({
  onChange,
  options,
  value,
  name,
  className = "",
  placeholder,
}) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div>
      <Select
        className={className}
        name={name}
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
}
