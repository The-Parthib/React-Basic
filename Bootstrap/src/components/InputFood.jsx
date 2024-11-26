function InputFood({ handleOnKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Any Text"
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
}

export default InputFood;
