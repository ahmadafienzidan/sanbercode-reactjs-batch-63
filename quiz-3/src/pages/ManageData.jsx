import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageData = () => {
  const [games, setGames] = useState([]);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    release_year: 2009,
    size: 0,
    prize: 0,
    rating: 0,
    image_url: 0,
    is_android_app: false,
    is_ios_app: false,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  //  Retrieve Data
  useEffect(() => {
    axios
      .get("https://quiz-api-rho.vercel.app/api/mobile-apps")
      .then((res) => {
        setGames(res.data);
        console.log(games);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Handle Input
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setInput({
        ...input,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios
        .put(`https://quiz-api-rho.vercel.app/api/mobile-apps/${selectedId}`, input)
        .then(() => {
          setGames((prev) => prev.map((game) => (game._id === selectedId ? { ...input, _id: selectedId } : game)));
          resetForm();
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .post("https://quiz-api-rho.vercel.app/api/mobile-apps", input)
        .then((res) => {
          setGames([...games, res.data]);
          resetForm();
        })
        .catch((err) => console.error(err));
    }
  };

  // Handle Edit
  const handleEdit = (id) => {
    const selectedGame = games.find((game) => game._id === id);
    setInput(selectedGame);
    setIsEdit(true);
    setSelectedId(id);
  };

  // Handle Delete
  const handleDelete = (id) => {
    axios
      .delete(`https://quiz-api-rho.vercel.app/api/mobile-apps/${id}`)
      .then(() => {
        setGames(games.filter((game) => game._id !== id));
      })
      .catch((err) => console.error(err));
  };

  //   utils
  const resetForm = () => {
    setInput({
      name: "",
      description: "",
      category: "",
      release_year: 2009,
      size: 0,
      price: 0,
      rating: 0,
      image_url: "",
      is_android_app: false,
      is_ios_app: false,
    });
    setIsEdit(false);
    setSelectedId(null);
  };

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-52">
      <div className="container w-full relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-purple-500">
            <tr>
              <th className="px-6 py-3">NO</th>
              <th className="px-6 py-3">NAMA</th>
              <th className="px-6 py-3">KATEGORI</th>
              <th className="px-6 py-3">DESCRIPTION</th>
              <th className="px-6 py-3">PRICE</th>
              <th className="px-6 py-3">RATING</th>
              <th className="px-6 py-3">RELEASE YEAR</th>
              <th className="px-6 py-3">SIZE</th>
              <th className="px-6 py-3">IS_ANDROID_APP</th>
              <th className="px-6 py-3">IS_IOS_APP</th>
              <th className="px-6 py-3">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {games.map((res, index) => (
              <tr key={res._id} className="bg-white border-t hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{res.name}</td>
                <td className="px-6 py-4">{res.category}</td>
                <td className="px-6 py-4">{truncateDescription(res.description, 3)}</td>
                <td className="px-6 py-4">{res.price === 0 ? "FREE" : res.price}</td>
                <td className="px-6 py-4 text-center">{res.rating}</td>
                <td className="px-6 py-4">{res.release_year}</td>
                <td className="px-6 py-4">{res.size}</td>
                <td className="px-6 py-4 text-center">{res.is_android_app}</td>
                <td className="px-6 py-4 text-center">{res.is_ios_app}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button onClick={() => handleEdit(res._id)} className="bg-yellow-400 px-2 py-1 rounded text-white">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(res._id)} className="bg-red-500 px-2 py-1 rounded text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form className="mt-10 w-[800px]" onSubmit={handleSubmit}>
        <h2 className="text-gray-400">Gambar Data Game</h2>
        <hr className="border-gray-300" />
        <br />
        <div className="mb-4">
          <label className="block mb-2">Image URL:</label>
          <input type="text" name="image_url" value={input.image_url} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <br />
        <h2 className="text-gray-400">Data Game</h2>
        <hr className="border-gray-300" />
        <br />
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" value={input.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea name="description" value={input.description} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <input type="text" name="category" value={input.category} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4 flex gap-4">
          <div>
            <label className="block mb-2">Release Year:</label>
            <input type="number" name="release_year" value={input.release_year} onChange={handleChange} className="w-full px-3 py-2 border rounded" min="2009" max="2024" required />
          </div>
          <div>
            <label className="block mb-2">Size (MB):</label>
            <input type="number" name="size" value={input.size} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div>
            <label className="block mb-2">Price:</label>
            <input type="number" name="price" value={input.price} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>
          <div>
            <label className="block mb-2">Rating:</label>
            <input type="number" name="rating" value={input.rating} onChange={handleChange} className="w-full px-3 py-2 border rounded" min="0" max="5" required />
          </div>
        </div>

        {/* CHECKBOX START */}
        <div className="mb-4 flex gap-4">
          <div>
            <label className="block mb-2">Is Android App:</label>
            <input type="checkbox" name="is_android_app" checked={input.is_android_app} onChange={handleChange} className="mr-2" />
          </div>
          <div>
            <label className="block mb-2">Is iOS App:</label>
            <input type="checkbox" name="is_ios_app" checked={input.is_ios_app} onChange={handleChange} className="mr-2" />
          </div>
        </div>
        {/* CHECKBOX END */}

        {/* SUBMIT BUTTON START */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEdit ? "Update" : "Submit"}
        </button>

        {isEdit && (
          <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded ml-4">
            Cancel
          </button>
        )}
        {/* SUBMIT BUTTON END */}
      </form>
    </div>
  );
};

export default ManageData;
