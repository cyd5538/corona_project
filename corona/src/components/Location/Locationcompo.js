import React, { useState, useEffect } from "react";
import axios from "axios";

function Locationcompo() {
  const [locdata, setLocData] = useState({});
  const [loading, setLoading] = useState(false);
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

  let yesterday =
    year +
    "" +
    ("00" + month.toString()).slice(-2) +
    "" +
    ("00" + date.toString()).slice(-2) -
    1;

  useEffect(() => {
    const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=C1t9JT%2BzuRHaBxC%2FK0Hhs%2BBA0KrYWHYOIh13ltztf0wplQ6t%2FTcFmHKobN6cMfhxIYM1%2BWsGydGvrrLfsxE96Q%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${format}&endCreateDt=${format}`;
    axios
      .get(url)
      .then((res) => {
        setLocData(res.data.response.body.items);
        setLoading(true);
        console.log(res.data.response.body.items);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="w-full flex justify-center items-center">
      <table className="border-2 w-4/5">
        <thead>
          <tr>
            <th className="border-2">지역</th>
            <th className="border-2">총 확진자</th>
            <th className="border-2">사망자</th>
            <th className="border-2">시도별 발생현황</th>
          </tr>
        </thead>
        <tbody>
          {locdata.item &&
            locdata.item.map((a, key) => (
              <tr key={key} className="border-2 h-5">
                <td className="border-2 h-7 text-center">{a.gubun}</td>
                <td className="border-2 h-7 text-right pr-4">{a.defCnt}</td>
                <td className="border-2 h-7 text-right pr-4">{a.deathCnt}</td>
                <td className="border-2 h-7 text-right pr-4">{a.incDec}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Locationcompo;
