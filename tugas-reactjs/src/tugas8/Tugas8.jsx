import React, { useState } from "react";

const Tugas8 = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <section id="tugas8">
      <div className="card-tugas8">
        <p>{count}</p>
        <button onClick={incrementCount}>Tambah</button>
        <span>{count >= 10 && <p>State count sudah lebih dari 10!!</p>}</span>
      </div>
    </section>
  );
};

export default Tugas8;
