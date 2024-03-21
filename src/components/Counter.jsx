function Counter({ totalCount }) {
  return (
    <div className="counter rounded-lg shadow-md text-center w-fit px-4 py-5">
      <p className="font-bold">
        Total Fonts:{" "}
        <span className="bg-slate-700 rounded-md p-2 font-bold text-white">
          {totalCount}
        </span>
      </p>
    </div>
  );
}

export default Counter;
