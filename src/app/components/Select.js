function Select({ options = [] }) {
  return (
    <select
      onChange={(event) => {
        console.log(event.target.value);
      }}
    >
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
