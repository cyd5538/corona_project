import React from "react";

function KoreaToday() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-4/5 shadow-2xl justify-center items-center text-1xl flex-wrap flex flex-row">
        <div className="flex justify-center items-center">
          <div>오늘의 확진자</div>
          <div className="ml-2 text-lg font-semibold pt-1 pb-1 text-red-600">
            16833838
          </div>
        </div>
        <div className="basis-1/2 justify-center items-center jutif flex-wrap flex">
            <div className="basis-2/4 text-center"> 하루전 4689  </div>
            <div className="basis-2/4 text-center"> 2주전 4689  </div>
            <div className="basis-2/4 text-center"> 1주전 4689  </div>
            <div className="basis-2/4 text-center"> 4주전 4689  </div>
        </div>
      </div>
    </div>
  );
}

export default KoreaToday;
