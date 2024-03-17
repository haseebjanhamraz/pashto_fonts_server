function Counter({ totalCount }) {
  return (
    <div className=" bg-yellow-200 rounded-lg shadow-md text-center w-fit px-4 py-5">
      <p>
        Total Fonts:{" "}
        <span className="bg-red-400 rounded-md p-2 font-bold text-white">
          {totalCount}
        </span>
      </p>
    </div>
  );
}

export default Counter;
