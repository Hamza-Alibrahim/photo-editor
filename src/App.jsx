/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Image from "./component/Image";
import Editor from "./component/Editor";
import Slider from "./component/Slider";

const App = () => {
  const imageRef = useRef();
  const [options, setOptions] = useState([
    {
      n: "brightness",
      t: "brightness",
      max: 200,
      min: 0,
      v: 100,
      id: 0,
      u: "%",
    },
    { n: "contrast", t: "contrast", max: 200, min: 0, v: 100, id: 1, u: "%" },
    { n: "saturate", t: "saturate", max: 200, min: 0, v: 100, id: 2, u: "%" },
    { n: "grayscale", t: "grayscale", max: 100, min: 0, v: 0, id: 3, u: "%" },
    { n: "sepia", t: "sepia", max: 100, min: 0, v: 0, id: 4, u: "%" },
    {
      n: "Hue-Rota",
      t: "Hue-Rotate",
      max: 180,
      min: -180,
      v: 0,
      id: 5,
      u: "deg",
    },
    { n: "blur", t: "blur", max: 40, min: 0, v: 0, id: 6, u: "px" },
  ]);
  const [sNumber, setSnumber] = useState(0);
  const [selected, setSelected] = useState(options[0]);
  useEffect(() => {
    setSelected(options[sNumber]);
  }, [options, sNumber]);
  let filter = options.map((e) => `${e.t}(${e.v}${e.u})`);
  if (imageRef.current != undefined)
    imageRef.current.style.filter = `${filter.join(" ")}`;
  return (
    <div className="h-screen overflow-hidden flex select-none">
      <div className="w-full flex flex-col items-center mt-5">
        <Image referance={imageRef} />
        <Slider selected={selected} setOptions={(e) => setOptions(e)} />
      </div>
      <Editor
        options={options}
        sNumber={sNumber}
        setSnumber={(e) => setSnumber(e)}
      />
    </div>
  );
};
export default App;
