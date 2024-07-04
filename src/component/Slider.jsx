/* eslint-disable react/prop-types */
const Slider = ({ selected, setOptions }) => {
  function updateValue(e) {
    setOptions((prev) => [
      ...prev.slice(0, selected.id),
      {
        n: selected.n,
        t: selected.t,
        min: selected.min,
        max: selected.max,
        v: +e.target.value,
        id: selected.id,
        u: selected.u,
      },
      ...prev.slice(selected.id + 1),
    ]);
  }
  return (
    <input
      className=" w-1/2"
      type="range"
      min={selected.min}
      max={selected.max}
      value={selected.v}
      onChange={updateValue}
    />
  );
};
export default Slider;
