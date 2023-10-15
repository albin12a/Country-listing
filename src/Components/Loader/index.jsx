/* eslint-disable react/prop-types */
import { Bars } from "react-loader-spinner";
import "./Loader.scss";

const Loader = ({ visible }) => {
  return (
    <div className="main-wrapper loader-wrapper">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
      />
    </div>
  );
};

export default Loader;
