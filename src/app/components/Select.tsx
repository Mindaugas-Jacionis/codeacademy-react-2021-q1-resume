interface Option {
  value: LanguageValues;
  children: React.ReactNode;
}

interface SelectInterface {
  onChange: (value: LanguageValues) => void;
  value: LanguageValues;
  options: Array<Option>;
}

type SelectEvent = React.ChangeEvent<HTMLSelectElement> & { target: { value: LanguageValues } };

function Select({ options, onChange, value, ...restProps }: SelectInterface) {
  const onSelect = (e: SelectEvent) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select {...restProps} value={value} onChange={onSelect}>
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
