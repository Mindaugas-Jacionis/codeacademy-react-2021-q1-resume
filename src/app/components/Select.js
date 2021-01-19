function Select({ options = [], onChange, value }) {
  const props = value ? { value } : {};

  const onSelect = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select {...props} value={value} onChange={onSelect}>
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
