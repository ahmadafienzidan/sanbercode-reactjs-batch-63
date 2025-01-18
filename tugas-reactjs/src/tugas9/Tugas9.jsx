const Tugas9 = () => {
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
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 ">John</td>
              <td className="px-6">Algoritma</td>
              <td className="px-6 ">80</td>
              <td className="px-6 ">A</td>
              <td className="px-6  text-right">
                <button className="m-2 border border-slate-900 px-4 py-2 text-black bg-white rounded hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-blue-300">Edit</button>
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                2
              </th>
              <td className="px-6 ">Doe</td>
              <td className="px-6 ">Matematika</td>
              <td className="px-6 ">70</td>
              <td className="px-6 ">B</td>
              <td className="px-6  text-right">
                <button className="m-2 border border-slate-900 px-4 py-2 text-black bg-white rounded hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-blue-300">Edit</button>
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</button>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                3
              </th>
              <td className="px-6 ">Frank</td>
              <td className="px-6 ">Kalkulus</td>
              <td className="px-6 ">60</td>
              <td className="px-6">C</td>
              <td className="px-6  text-right">
                <button className="m-2 border border-slate-900 px-4 py-2 text-black bg-white rounded hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-blue-300">Edit</button>
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</button>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                4
              </th>
              <td className="px-6">Jason</td>
              <td className="px-6">Basis Data</td>
              <td className="px-6">90</td>
              <td className="px-6">A</td>
              <td className="px-6 text-right">
                <button className="m-2 border border-slate-900 px-4 py-2 text-black bg-white rounded hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-blue-300">Edit</button>
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tugas9;
