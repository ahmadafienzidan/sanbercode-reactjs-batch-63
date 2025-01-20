import { useEffect, useState } from "react";
import axios from "axios";

const Tugas10 = () => {
  const [data, setData] = useState(null);
  const handleIndexScore = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "E";
  };
  useEffect(() => {
    axios
      .get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex justify-center mt-20 mb-52 ">
      <div className="w-[800px] relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-[#8c5cf4] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Mata Kuliah
              </th>
              <th scope="col" className="px-6 py-3">
                Nilai
              </th>
              <th scope="col" className="px-6 py-3">
                Index Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {data != null &&
              data.map((res, index) => (
                <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 ">{index + 1}</td>
                  <td className="px-6 py-4 ">{res.name}</td>
                  <td className="px-6 py-4">{res.course}</td>
                  <td className="px-6 py-4">{res.score}</td>
                  <td className="px-6 py-4">{handleIndexScore(res.score)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tugas10;
