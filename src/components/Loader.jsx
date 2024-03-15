import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center z-10 items-center">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h1 className=" text-gray-500 text-2xl">Loading...</h1>
    </div>
  );
};

export default Loader;
