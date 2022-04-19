import React from "react";

function KoreaChart() {
  const dataList = [
    {
      name: "확진자",
    },
    {
      name: "위중증자",
    },
    {
      name: "사망자",
    },
    {
      name: "검사자",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-md shadow-2xl w-4/5 mt-10 border-1 w-full ">
        <div className="flex justify-start items-center pt-2 pl-4 pb-2">
          {dataList.map((index, key) => (
            <div className="cursor-pointer w-20 underline hover:underline-offset-7">
              {index.name}
            </div>
          ))}
        </div>

        <canvas className="mt-10 border-1 w-full"></canvas>
      </div>
    </div>
  );
}

export default KoreaChart;
