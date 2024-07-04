/* eslint-disable react/prop-types */
import img from "../assets/img1.jpg";

const Image = ({ referance }) => {
  return (
    <img
      className="w-4/5 h-4/5 object-cover mb-10"
      ref={referance}
      src={img}
      alt="photo"
    />
  );
};
export default Image;
