/* eslint-disable react/prop-types */
const Editor = ({ options, sNumber, setSnumber }) => {
  let arrOptions = options.map((e) => e.n);
  return (
    <div>
      <ul className="bg-indigo-500 h-screen w-36 text-center text-white font-medium">
        {arrOptions.map((e, i) => {
          return (
            <li
              className={`relative cursor-pointer hover:bg-indigo-600 p-4 after:w-20 after:h-[2px] after:bg-white after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:absolute ${
                sNumber == i ? "bg-indigo-600" : "bg-transparent"
              }`}
              id={i}
              key={i}
              onClick={(e) => setSnumber(e.target.id)}
            >
              {e.replace("-", " ")}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Editor;
