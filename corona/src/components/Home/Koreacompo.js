import React, { useState, useEffect } from "react";
import axios from "axios";

function Koreacompo() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    // today yesterday
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let format =
      year +
      "" +
      ("00" + month.toString()).slice(-2) +
      "" +
      ("00" + date.toString()).slice(-2);

    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=C1t9JT%2BzuRHaBxC%2FK0Hhs%2BBA0KrYWHYOIh13ltztf0wplQ6t%2FTcFmHKobN6cMfhxIYM1%2BWsGydGvrrLfsxE96Q%3D%3D&pageNo=4&numOfRows=10&startCreateDt=20200120&endCreateDt=${format}`;
    
    axios
      .get(url)
      .then((response) => {
        setDate(response.data);
      })
      .catch((error) => console.log(error));
  },[]);

  return (
    <div class="flex justify-center items-center">
<div class="w-4/5 mb-10 justify-center items-center text-1xl flex-wrap flex flex-row rounded-md shadow-2xl pb-4 pt-4">
  <div class="basis-1/5 flex flex-col justify-center items-center">
    <div>확진자</div>
    <div className="font-semibold pt-1 pb-1 text-red-600">16833838</div>
    <div className="shadow-md font-semibold border-2 rounded-2xl pl-2 pr-2 bg-slate-300 text-red-600">11568</div>
  </div>
  <div className="basis-1/5 flex flex-col justify-center items-center">
    <div>사망자</div>
    <div className="font-semibold pt-1 pb-1">16833838</div>
    <div className="shadow-md border-2 rounded-2xl pl-2 pr-2 bg-slate-300">11568</div>
  </div>
  <div className="basis-1/5 flex flex-col justify-center items-center">
    <div>입원환자</div>
    <div className="font-semibold pt-1 pb-1 text-indigo-500">16833838</div>
    <div className="shadow-md font-semibold border-2 rounded-2xl pl-2 pr-2 bg-slate-300 text-indigo-500">11568</div>
  </div>
    <div className="basis-1/5 flex flex-col justify-center items-center">
      <div>위중증자</div>
      <div className="font-semibold pt-1 pb-1">16833838</div>
      <div className="shadow-md border-2 rounded-2xl pl-2 pr-2 bg-slate-300">11568</div>
    </div>
    </div>
</div>
  );
}

export default Koreacompo;
