import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://6678f9f40bd45250562081d9.mockapi.io/api/student-score";

const Tugas11 = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch Data
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      axios
        .put(`${API_URL}/${editId}`, input)
        .then((res) => {
          console.log(res);
          const updatedData = data.map((item) => (item.id === editId ? res.data : item));
          setData(updatedData);
          setIsEdit(false);
          setEditId(null);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post(API_URL, input)
        .then((res) => {
          setData([...data, res.data]);
          setInput({
            name: "",
            course: "",
            score: 0,
          });
        })
        .catch((err) => console.error(err));
    }
    setInput({
      name: "",
      course: "",
      score: 0,
    });
  };

  // Handle Edit
  const handleEdit = (e) => {
    let id = e.target.value;
    console.log(id);
    const selectedData = data.find((item) => item.id === id);
    console.log(selectedData);
    setInput({
      name: selectedData.name,
      course: selectedData.course,
      score: selectedData.score,
    });
    setIsEdit(true);
    setEditId(id);
  };

  // Handle Delete
  const handleDelete = (event) => {
    let id = event.target.value;
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        const updatedData = data.filter((res) => res.id !== id);
        setData(updatedData);
      })
      .catch((err) => console.error(err));
  };

  //  Index Score
  const handleIndexScore = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "E";
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-52">
      <div className="w-[800px] relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-purple-500">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Mata Kuliah</th>
              <th className="px-6 py-3">Nilai</th>
              <th className="px-6 py-3">Index Nilai</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((res, index) => (
              <tr key={res.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{res.name}</td>
                <td className="px-6 py-4">{res.course}</td>
                <td className="px-6 py-4">{res.score}</td>
                <td className="px-6 py-4">{handleIndexScore(res.score)}</td>
                <td className="px-6 py-4">
                  <button onClick={handleEdit} value={String(res.id)} className="text-white bg-blue-500 px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={handleDelete} value={String(res.id)} className="text-white bg-red-500 px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form className="mt-10 w-[800px]" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" value={input.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mata Kuliah:</label>
          <input type="text" name="course" value={input.course} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Nilai:</label>
          <input type="number" name="score" value={input.score} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEdit ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Tugas11;
